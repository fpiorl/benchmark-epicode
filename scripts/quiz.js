
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
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does GPU stand for?",
        correct_answer: "Graphics Processing Unit",
        incorrect_answers: [
            "Graphical Performance Unit",
            "General Processing Unit",
            "Graphical Processor Utility",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of these is a programming language?",
        correct_answer: "Python",
        incorrect_answers: ["Windows", "HTTP", "HTML"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does RAM stand for?",
        correct_answer: "Random Access Memory",
        incorrect_answers: [
            "Read Access Memory",
            "Run All Memory",
            "Randomized Algorithm Memory",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which company developed the Windows operating system?",
        correct_answer: "Microsoft",
        incorrect_answers: ["Apple", "Google", "IBM"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does HTML stand for?",
        correct_answer: "HyperText Markup Language",
        incorrect_answers: [
            "HighText Machine Language",
            "Hyperloop Markup Language",
            "HyperText Markdown Language",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
        "Which device is required for a computer to communicate over a network?",
        correct_answer: "Network Interface Card",
        incorrect_answers: ["Hard Drive", "CPU", "RAM"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does SSD stand for?",
        correct_answer: "Solid State Drive",
        incorrect_answers: [
            "Secure Storage Device",
            "Solid Storage Disk",
            "Super Speed Disk",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
        "Which programming language is mainly used for web development on the client side?",
        correct_answer: "JavaScript",
        incorrect_answers: ["C++", "Python", "Go"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is an operating system?",
        correct_answer: "Linux",
        incorrect_answers: ["Oracle", "PostgreSQL", "Docker"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the main function of the ALU in a CPU?",
        correct_answer: "Perform arithmetic and logic operations",
        incorrect_answers: [
            "Manage memory",
            "Control network traffic",
            "Store data permanently",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of these is a version control system?",
        correct_answer: "Git",
        incorrect_answers: ["Docker", "Kubernetes", "Jenkins"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which company created the Java programming language?",
        correct_answer: "Sun Microsystems",
        incorrect_answers: ["Microsoft", "Apple", "Oracle"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is NOT a type of computer memory?",
        correct_answer: "JPEG",
        incorrect_answers: ["RAM", "ROM", "Cache"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which port number does HTTP use by default?",
        correct_answer: "80",
        incorrect_answers: ["443", "22", "21"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does BIOS stand for?",
        correct_answer: "Basic Input Output System",
        incorrect_answers: [
            "Binary Integrated Operating System",
            "Basic Internal Output System",
            "Boot Integrated Operating Software",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is a markup language?",
        correct_answer: "HTML",
        incorrect_answers: ["Python", "C", "Java"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is an example of open-source software?",
        correct_answer: "Linux",
        incorrect_answers: ["Windows 10", "macOS", "Microsoft Office"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does HTTPS stand for?",
        correct_answer: "HyperText Transfer Protocol Secure",
        incorrect_answers: [
            "HyperText Transfer Protocol Standard",
            "HyperText Transmission Protocol Secure",
            "HighText Transfer Protocol Secure",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which data structure uses LIFO (Last In, First Out)?",
        correct_answer: "Stack",
        incorrect_answers: ["Queue", "Array", "Linked List"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which of the following is a database management system?",
        correct_answer: "MySQL",
        incorrect_answers: ["React", "Node.js", "TensorFlow"],
    },
];
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log("Query variable %s not found", variable);
}
const difficulty = getQueryVariable("difficulty");

let quizQuestions = [...questions];
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

let tempo = 0

function updateChart(percentuale) {
    myChart.data.datasets[0].data = [percentuale, tempo - percentuale];
    myChart.update();
}

let resetTimerHandler = 0;
const resetTimer = function () {
    resetTimerHandler = 1;
};


if (difficulty === "easy") {
    quizQuestions = quizQuestions.slice(0, 5);
    tempo = 60
} else if (difficulty === "medium") {
    quizQuestions = quizQuestions.slice(0, 10);
    tempo = 45
} else if (difficulty === "hard") {
    quizQuestions = quizQuestions.slice(0, 15);
    tempo = 30
} else if (difficulty === "stefano") {
    quizQuestions = quizQuestions.slice(0, 15);
    tempo = 5
}


let currentTimer = null;
const startTimer = function (reset) {
    clearInterval(currentTimer);
    updateChart(tempo);

    let secs = tempo; // domanda seconds o qualcosa dle genere
    //if (difficulty === "medium") {
        //secs = 45;
    //} else if (difficulty === "hard") {
        //secs = 30;
    //} else if (difficulty === "stefano") {
        //secs = 5;
    //}

    const end = new Date().getTime() + secs * 1000;

    currentTimer = setInterval(() => {
        // secondi passati
        const passati = end - new Date().getTime();
        let percentuale = (passati / 1000 / secs) * 100;
        updateChart(Math.floor(passati / 1000));
        let pSeconds = document.getElementById("seconds-passed");
        pSeconds.innerText = `${parseInt(passati / 1000)}`;
        if (passati <= 0 || resetTimerHandler === 1) {
            resetTimerHandler = 0;
            updateChart(secs);
            clearInterval(currentTimer);
            // XXX tempo scaduto
            index++;
            nextQuestion();
        }
    }, 250);
};




shuffle(quizQuestions)

let correct = 0;
let index = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const disableAll = function(btns){
    btns.forEach(btn => btn.disabled = true) 
}

let allButtons = []

const nextQuestion = function () {

    startTimer();
    const question = quizQuestions[index];

    // check if last question
    if (question === quizQuestions[-1]) {
        window.location.href = `/results.html?esatte=${correct}&total=${quizQuestions.length}`;
    }

    const domanda = document.getElementById("domanda");
    const btnContainer = document.getElementById("btn-container");
    btnContainer.innerHTML = "";

    let incorrect = question["incorrect_answers"];
    let btns = [];

    incorrect.forEach((btn) => {
        const btnHtml = document.createElement("button");
        allButtons.push(btnHtml)
        btnHtml.innerText = btn;
        btnHtml.classList.add("btn");
        btns.push(btnHtml);
        btnHtml.onclick = async function () {
            disableAll(allButtons)
            updateChart(tempo);
            index++;
            btnHtml.style.backgroundColor = 'red'
            await sleep(1000);
            nextQuestion();
        };
    });

    const btnHtml = document.createElement("button");
    allButtons.push(btnHtml)
    btnHtml.innerText = question["correct_answer"];
    btnHtml.classList.add("btn");
    btnHtml.onclick = async function () {
        disableAll(allButtons)
        updateChart(tempo);
        correct++;
        index++;
        btnHtml.style.backgroundColor = 'green'
        await sleep(1000);
        nextQuestion();
    };
    btns.push(btnHtml);

    shuffle(btns);

    btns.forEach((btn) => btnContainer.appendChild(btn));

    domanda.innerText = question["question"];
    const currentQuestion = document.getElementById("currentQuestion");
    currentQuestion.innerHTML = `<p style="font-size:2em">QUESTION ${
        index + 1
    } <span style="color:purple">/${quizQuestions.length}</span></p>`;
};

window.onload = function () {
    nextQuestion(0);
};
