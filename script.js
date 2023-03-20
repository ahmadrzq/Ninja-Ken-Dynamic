// Slider-------------------------------
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.getElementsByClassName("project");
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
  btn[i].addEventListener("click", () => {
    modal[i].style.display = "block";
  });
  buttonClose[i].addEventListener("click", () => {
    modal[i].style.display = "none";
  });
}

// validation form
function validation() {
  const email = document.myForm.email.value;
  const textarea = document.myForm.message.value;
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var result = reg.test(email);

  if (email == "" && textarea == "") {
    alert("Email dan pesan harus diisi!");
    return false;
  } else if (email == "") {
    alert("Email harus diisi!");
    return false;
  } else if (textarea == "") {
    alert("Pesan harus diisi!");
    return false;
  } else {
    if (result == false) {
      alert("Email yang anda masukkan tidak valid");
      return false;
    } else {
      alert("Terimakasih, pesan anda akan segera kami jawab");
      return true;
    }
  }
}

// Accordion
const buttonFaq = document.getElementsByClassName("btn-faq");
const answer = document.getElementsByClassName("answer");

for (let i = 0; i < buttonFaq.length; i++) {
  buttonFaq[i].addEventListener("click", function () {
    // const answer = this.nextElementSibling;
    if (answer[i].style.display === "block") {
      answer[i].style.display = "none";
    } else {
      answer[i].style.display = "block";
    }
  });
}
