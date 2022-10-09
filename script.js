const imagesCanettes = document.querySelectorAll(".slider-img-canettes img");
const nbImagesCannettes = imagesCanettes.length;
const next = document.querySelector(".next");
let count = 0;

const canetteSuivante = () => {
  imagesCanettes[count].classList.remove("active");

  if (count < nbImagesCannettes - 1) {
    count++;
  } else {
    count = 0;
  }

  imagesCanettes[count].classList.add("active");
};

next.addEventListener("click", canetteSuivante);
