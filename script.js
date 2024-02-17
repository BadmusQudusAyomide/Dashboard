// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
};


function openMovie(movie) {
  // Implement the logic to open the movie or perform any action on click
  console.log('Opening movie:', movie);
  // You can replace this console log with any action you want to perform
};