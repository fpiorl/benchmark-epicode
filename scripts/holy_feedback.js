/* Versione SACRA di feedback.js in sole 13 righe di codice */
const illumina = function(numero){
    stars.forEach((stella, i) => stars[i].firstElementChild.style.fill = i >= numero ? "#0B113B":"#00FFFF");
}

let illuminate = 0;
const stars = document.querySelectorAll(".star");
stars.forEach((stella, i) => {
    const current = i+1
    stella.addEventListener("mouseenter", () => illumina(current>illuminate?current:illuminate));
    stella.addEventListener("click", () => illuminate=+!(illuminate===current)*(current));
    stella.parentElement.addEventListener("mouseleave", () => illumina(illuminate));
});
