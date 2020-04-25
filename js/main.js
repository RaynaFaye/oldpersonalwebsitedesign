/* Making the circles for the project area accessible for keyboard users as :focus-within in CSS doesn't work yet in all browsers*/
try {
  document.querySelector(':focus-within');
} catch (error) {
  var circles = document.querySelectorAll('.circle');
  var circle1 = document.querySelector('.circle1 .circle-overlay');
  var circle2 = document.querySelector('.circle2 .circle-overlay');
  var circle3 = document.querySelector('.circle3 .circle-overlay');
  var circle4 = document.querySelector('.circle4 .circle-overlay');
  var circle5 = document.querySelector('.circle5 .circle-overlay');
  var whiteCircles = document.querySelectorAll('.white');
  var allWhiteCircles = document.querySelectorAll('.white-overlay');
  var projectSection = document.querySelector('#projects');

  function addOverlay(circle, className) {
    circle.addEventListener('focusin', function() {
      circle.classList.add(className);
      window.scrollTo(0, projectSection.offsetTop);
    });
    circle.addEventListener('focusout', function() {
      circle.classList.remove(className);
    });
  }
  console.log(circles);
  addOverlay(circle1, 'overlay');
  addOverlay(circle2, 'overlaytwo');
  addOverlay(circle3, 'overlay');
  addOverlay(circle4, 'overlaytwo');
  addOverlay(circle5, 'overlay');

  for (var i = 0; i < circles.length; i++) {
    addOverlay(circles[i], 'scale-up');
  }
  for (var i = 0; i < allWhiteCircles.length; i++) {
    addOverlay(allWhiteCircles[i], 'overlaythree');
  }
  for (var i = 0; i < whiteCircles.length; i++) {
    addOverlay(whiteCircles[i], 'white-color-change');
  }
}

/* Back to Top Button*/
var backToTopButton = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > window.innerHeight) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', function(e) {
  window.scrollTo(0, 0);
});

/* Image gallery */
var images = document.querySelectorAll('.gallery img');
var fullSizeImageOverlay = document.querySelector('.full-size-image');
var fullSizeImage = fullSizeImageOverlay.querySelector('img');
var imageButton = fullSizeImageOverlay.querySelector('button');

function openFullImage(e) {
  fullSizeImage.src = e.target.src;
  fullSizeImageOverlay.classList.add('open');
}

function closeFullImage() {
  fullSizeImageOverlay.classList.remove('open');
}
function escapeFullImage(e) {
  if (e.keyCode === 27) {
    fullSizeImageOverlay.classList.remove('open');
  }
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', openFullImage);
}

imageButton.addEventListener('click', closeFullImage);
document.addEventListener('keyup', escapeFullImage);

/* Form validator for email */
document.getElementById('email').addEventListener('input', function(e) {
  var regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  var tooltipElt = document.querySelector('.tooltip');
  if (!regexEmail.test(e.target.value)) {
    tooltipElt.style.visibility = 'visible';
  } else {
    tooltipElt.style.visibility = 'hidden';
  }
});
