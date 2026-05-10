let currentSlide = 0;

function moveSlide(direction){
  const slides = document.querySelectorAll(".slide");

  slides[currentSlide].classList.remove("active");

  currentSlide += direction;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}