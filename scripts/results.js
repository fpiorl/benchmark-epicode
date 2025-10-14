const ctx = document.getElementById("myChart")
let correctAnswersPercent = 80
let wrongAnswersPercent = 100 - correctAnswersPercent
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
      ShadowPlugin: {
        display: true,
      },
    },
    cutout: "70%",
  },
}
myChart = new Chart(ctx, config)
