let litStars = 0;

const stars = document.querySelectorAll(".star");
stars.forEach((stella, i) => {
  stella.addEventListener("mouseenter", () => {
    illumina(i + 1);
  });
  stella.addEventListener("click", () => {
    if (litStars === i + 1) {
      litStarts = 0;
    } else {
      litStars = i + 1;
    }
  });
  stella.parentElement.addEventListener("mouseleave", () => {
    illumina(litStars);
  });
});

const illumina = function (numero) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].firstElementChild.style.fill =
      i >= numero ? "rgb(11,17,59)" : "#00FFFF";
  }
};
