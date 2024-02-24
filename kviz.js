const quizData = [ //pitanja za kviz
    {
        question: "Kada je Quentin Tarantino rodjen?",
        options: ["1960.", "1963.", "1970.", "1973."],
        correctAnswer: "1963.",
    },
    {
        question: "Koji je Tarantinov prvi film?",
        options: ["Jackie Brown", "Pulp Fiction", "Reservoir Dogs", "Kill Bill Volume 1"],
        correctAnswer: "Reservoir Dogs",
    },
    {
        question: "Koliko je Oskara on osvojio?",
        options: ["2", "0", "1", "3"],
        correctAnswer: "2",
    },
    {
        question: "Iz kog filma je vic o paradajizima?",
        options: ["Kill Bill Volume 1", "Kill Bill Volume 2", "Pulp Fiction", "Hateful Eight"],
        correctAnswer: "Pulp Fiction",
    },
];

//deklarisanje promenljivih za trenutno pitanje i rezultat i postavljanaje na nulu
let currentQuestion = 0; 
let score = 0;

//deklarisanje promenljivih i njihovo povezivanje sa html-om
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-btn");

//dodeljivanje akcija za dugmad
document.getElementById("start-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", loadNextQuestion);
restartButton.addEventListener("click", restartQuiz);

//funkcija za pokretanje kviza
function startQuiz() {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
}

//funkcija za ponovno pokretanje kviza
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = "none";
    startQuiz();
}

//funkcija za ucitavanje pitanja
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

//provera da li je korisnikov odgovor tacan
function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

//funkcija za prikaz rezultata
function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.innerText = `Tačno ste odgovorili na ${score} od ${quizData.length} pitanja!`;
}

//funkcija koja proverava da li treba ucitati sledece pitanje
function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}