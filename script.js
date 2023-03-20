// Slider-------------------------------
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  console.log(slideIndex);
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.getElementsByClassName("project");
  console.log(slides);
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
};

showSlide(slideIndex);

// Modal---------------------------------
const btn = document.querySelectorAll(".img-btn-modal");
const modal = document.querySelectorAll(".modalDescription");
const buttonClose = document.querySelectorAll(".close");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        modal[i].style.display = "block";
    })
    buttonClose[i].addEventListener('click', ()=> {
        modal[i].style.display = "none";
    })
}
