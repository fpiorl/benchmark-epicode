let litStars = 0;

const stars = document.querySelectorAll(".star");
stars.forEach((stella, i) => {
    stella.addEventListener("mouseenter", (event) => {
        illumina(litStars > 0? litStars: i+1)
    });
    stella.addEventListener("click", () => {
        if (litStars === i+1){
            litStars = 0
            illumina(0) 
        } else {
            litStars = i+1;
        }
    });
    stella.parentElement.addEventListener("mouseleave", () => {
        illumina(litStars)
    });
});

const illumina = function(numero){
    for (let i = 0; i < stars.length; i++) {
        stars[i].firstElementChild.style.fill = ( i >= numero )? "black":"#00FFFF";
    }
}
