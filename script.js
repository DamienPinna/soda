const imagesCanettes = document.querySelectorAll(".slider-img-canettes img");
const description = document.querySelectorAll(".item-description");
const backgroundColor = document.querySelector(".container");
const nbImagesCannettes = imagesCanettes.length;
const next = document.querySelector(".next");
let count = 0;

const canetteSuivante = () => {
  imagesCanettes[count].classList.remove("active");
  description[count].classList.remove("active");

  switch (count) {
    case 0:
      backgroundColor.classList.remove("bg-zero-sugar");
      backgroundColor.classList.add("bg-vanilla");
      break;
    case 1:
      backgroundColor.classList.remove("bg-vanilla");
      backgroundColor.classList.add("bg-cherry");
      break;
    case 2:
      backgroundColor.classList.remove("bg-cherry");
      backgroundColor.classList.add("bg-orange-vanilla");
      break;
    case 3:
      backgroundColor.classList.remove("bg-orange-vanilla");
      backgroundColor.classList.add("bg-zero-sugar");
      break;
    default:
      console.log("default");
  }

  if (count < nbImagesCannettes - 1) {
    count++;
  } else {
    count = 0;
  }

  imagesCanettes[count].classList.add("active");
  description[count].classList.add("active");
};

next.addEventListener("click", canetteSuivante);
