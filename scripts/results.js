const ctx = document.getElementById("myChart");
let correctAnswers = 60;
let wrongAnswers = 40;
const config = {
  type: "doughnut",
  data: {
    labels: ["wrong answers", "correct answers"],
    datasets: [
      {
        label: "My First Dataset",
        data: [wrongAnswers, correctAnswers],
        backgroundColor: ["#C2128D", "rgb(0, 255, 255)"],
        hoverOffset: 4,
        borderColor: "transparent",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  },
};
myChart = new Chart(ctx, config);
