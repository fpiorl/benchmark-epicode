let litStars = 0;
const stars = document.querySelectorAll(".star");
stars.forEach((stella, i) => {
  stella.addEventListener("mouseenter", (event) => {
    console.log(stella.firstElementChild);
    stella.firstElementChild.style.fill = "#00FFFF";
    for (let j = 0; j <= i; j++) {
      stars[j].firstElementChild.style.fill = "#00FFFF";
    }
    for (let j = i + 1; j < stars.length; j++) {
      stars[j].firstElementChild.style.fill = "black";
    }
  });
  stella.addEventListener("click", () => {
    litStars = i;
  });
  stella.parentElement.addEventListener("mouseleave", () => {
    if (litStars === 0) {
      for (let j = 0; j < stars.length; j++) {
        stars[j].firstElementChild.style.fill = "black";
      }
      return;
    }
    for (let j = 0; j < stars.length; j++) {
      stars[j].firstElementChild.style.fill = "black";
    }
    for (let j = 0; j <= litStars; j++) {
      stars[j].firstElementChild.style.fill = "#00FFFF";
    }
  });
});
