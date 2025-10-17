const tendina = document.getElementById("tendina")
const options = document.querySelector(".options")

tendina.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block"
})
const procedi = document.getElementById("procedi")
let selectedValue = ""
procedi.disabled = true

options.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    selectedValue = e.target.getAttribute("data-value")
    tendina.innerText = e.target.innerText
    options.style.display = "none"
    procedi.disabled = false
    const hiddenTendina = document.getElementById("hidden-tendina")
    hiddenTendina.value = selectedValue
  }
})
