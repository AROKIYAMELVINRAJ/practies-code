const quizData = [
  {
    question: "Which property is used to change the background color?",
    answers: [
      { text: "background", correct: false },
      { text: "background-color", correct: true },
      { text: " bgcolor", correct: false },
      { text: "color", correct: false },
    ]
  },
  {
    question: "Which method is used to output data in the console?",
    answers: [
      { text: "output.log()", correct: false },
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "document.write()", correct: false },
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Tool Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ]
  },
   {
    question: "What does DOM stand for?",
    answers: [
      { text: "Data Order Model", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Document Order Method", correct: false },
      { text: "Data Object Model", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const ansbtns = document.getElementById("ansbtns");
const nextbtn = document.getElementById("nextbtn");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  const currentQuiz = quizData[currentIndex];
  const quizNo = currentIndex + 1;
  questionElement.innerHTML = quizNo + ". " + currentQuiz.question;

  currentQuiz.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    ansbtns.appendChild(button);
  });
}

function resetState() {
  nextbtn.style.display = "none";
  while (ansbtns.firstChild) {
    ansbtns.removeChild(ansbtns.firstChild);
  }
}

function selectAnswer(event) {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(ansbtns.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextbtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${quizData.length}.`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
}

function handleNextButton() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextbtn.addEventListener("click", () => {
  if (currentIndex < quizData.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
