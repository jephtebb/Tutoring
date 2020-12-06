var mathImagesSrc = [
    './assets/images/slide-show-images/math0.jpg',
    './assets/images/slide-show-images/math1.jpg',
    './assets/images/slide-show-images/math2.jpg',
    './assets/images/slide-show-images/math3.jpg',
    //'./assets/images/slide-show-images/math4.jpg',
    //'./assets/images/slide-show-images/math5.jpg',
    './assets/images/slide-show-images/math6.jpeg',
    './assets/images/slide-show-images/math7.jpg',
    //'./assets/images/slide-show-images/math8.png',
    ]
    var mathImageCounter = 0;
    var slider = document.querySelector('#slideShow');
    var slideShow = function () {
        slider.setAttribute('src', mathImagesSrc[mathImageCounter]);
        if (mathImageCounter < mathImagesSrc.length - 1) {
            mathImageCounter++;
        } else {
            mathImageCounter = 0;
        }
        setTimeout('slideShow()', 4000);
    }
    window.onload = slideShow;
    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}