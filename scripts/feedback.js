const illumina = numero => stars.forEach((_, i) => stars[i].firstElementChild.style.fill = i >= numero ? "#013":"#0ff");
let lit = 0, stars = document.querySelectorAll(".star"); 
stars.forEach((star, i) => {
    star.addEventListener("mouseenter", () => illumina(i+1>lit?i+1:lit));
    star.addEventListener("click", () => lit=(i+1)*+!(lit===i+1));
});
stars[0].parentElement.addEventListener("mouseleave", () => illumina(lit));
