const totalAnswers = getQueryVariable("total")
const correctPercent = document.getElementById("correctPercent")
correctPercent.innerText =
  Number(getQueryVariable("esatte") / totalAnswers).toFixed(4) * 100 +
  " " +
  "%" +
  " "
const wrongPercent = document.getElementById("wrongPercent")
wrongPercent.innerText =
  Number((totalAnswers - getQueryVariable("esatte")) / totalAnswers).toFixed(
    4
  ) *
    100 +
  " " +
  "%"

const ctx = document.getElementById("myChart")
ctx.globalCompositeOperation = "destination-over"
let correctAnswersPercent = getQueryVariable("esatte")
let wrongAnswersPercent = totalAnswers - correctAnswersPercent

const config = {
  type: "doughnut",

  data: {
    labels: ["wrong answers", "correct answers"],
    datasets: [
      {
        label: "My First Dataset",
        data: [wrongAnswersPercent, correctAnswersPercent],
        backgroundColor: ["#C2128D", "rgb(0, 255, 255)"],
        hoverOffset: 4,
        borderColor: "transparent",
      },
    ],
  },
  options: {
    responsive: true,
    //maintainAspectRatio: false,
    aspectRatio: 1.2,

    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  },
}
myChart = new Chart(ctx, config)
function getQueryVariable(variable) {
  let query = window.location.search.substring(1)
  let vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1])
    }
  }
  console.log("Query variable %s not found", variable)
}
console.log(getQueryVariable("esatte"))

const correctAnswers = document.getElementById("correctAnswers")
const wrongAnswers = document.getElementById("wrongAnswers")
correctAnswers.innerText =
  getQueryVariable("esatte") + "/" + totalAnswers + " " + "risposte esatte"
wrongAnswers.innerText =
  totalAnswers -
  getQueryVariable("esatte") +
  "/" +
  totalAnswers +
  " " +
  "risposte errate"

const passedOrNot = document.getElementById("passedOrNot")
if (getQueryVariable("esatte") >= 6) {
  passedOrNot.innerHTML = `<h3>Congratulations!</h3>
  <span>You passed the exam.</span>
<br><br><br><br><p>We'll send you the certificate
in few minutes.
Check your email (including
promotions / spam folder)</p>
  
  `
} else {
  passedOrNot.innerHTML = `<h3>You did shit!</h3>
  <span>You didn't pass the exam.</span>
<br><br><br><br><p>We'll not send you anything.
</p>
`
}

const bottoneBianco = document.getElementsByClassName("bottone-bianco")
bottoneBianco[0].addEventListener("click", function (e) {
  window.location.href = `/feedback.html
`
})
