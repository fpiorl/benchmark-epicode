const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const shuffle = function (array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

const ctx = document.getElementById("myChart");

const config = {
  type: "doughnut",
  data: {
    labels: ["tempo rimasto", "tempo perso"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0],
        backgroundColor: ["rgb(0, 0, 0, 0.5)", "rgb(0, 255, 255)"],
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

function updateChart(percentuale) {
  myChart.data.datasets[0].data = [percentuale, 100 - percentuale];
  myChart.update();
}

let resetTimerHandler = 0;
const resetTimer = function () {
  resetTimerHandler = 1;
};

let currentTimer = null;
const startTimer = function (reset) {
  clearInterval(currentTimer);
  updateChart(100);

  let secs = 60; // domanda seconds o qualcosa dle genere
  const end = new Date().getTime() + secs * 1000;

  currentTimer = setInterval(() => {
    // secondi passati
    const passati = end - new Date().getTime();
    let percentuale = (passati / 1000 / secs) * 100;
    updateChart(percentuale);
    if (passati <= 0 || resetTimerHandler === 1) {
      resetTimerHandler = 0;
      updateChart(100);
      clearInterval(currentTimer);
      // XXX tempo scaduto
      nextQuestion();
    }
  }, 250);
};

let quizQuestions = [...questions];

let correct = 0;
let index = 0;

const nextQuestion = function () {
  startTimer();
  const question = questions[index];

  // check if last question
  if (question === questions[-1]) {
    window.location.href = `/results.html?esatte=${correct}&total=${quizQuestions.length}`;
  }

  const domanda = document.getElementById("domanda");
  const btnContainer = document.getElementById("btn-container");
  btnContainer.innerHTML = "";

  let incorrect = question["incorrect_answers"];
  let btns = [];

  incorrect.forEach((btn) => {
    const btnHtml = document.createElement("button");
    btnHtml.innerText = btn;
    btnHtml.classList.add("btn");
    btns.push(btnHtml);
    btnHtml.onclick = function () {
      updateChart(100);
      index++;
      nextQuestion();
    };
  });

  const btnHtml = document.createElement("button");
  btnHtml.innerText = question["correct_answer"];
  btnHtml.classList.add("btn");
  btnHtml.onclick = function () {
    updateChart(100);
    correct++;
    index++;
    nextQuestion();
  };
  btns.push(btnHtml);

  shuffle(btns);

  btns.forEach((btn) => btnContainer.appendChild(btn));

  domanda.innerText = question["question"];
};

window.onload = function () {
  nextQuestion(0);
};
