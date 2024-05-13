
const questions = [
    {
      question: "An Informal Gathering occurs when a group of people get together in a casual, relaxed manner. Which situation below is the best example of an Informal Gathering?",
      answers: [
        "Debating club meets on the first Sunday morning of every month.",
        "After finding out about his salary raise, Jay and a few colleagues go out for a quick dinner after work.",
        "Meena sends out 10 invitations for a bachelorette party she is giving for her elder sister.",
        "Whenever she eats at a Chinese restaurant, Roop seems to run into Dibya.",
      ],
      correctAnswer: "Debating club meets on the first Sunday morning of every month.",
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;
  
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerElement = document.createElement("input");
      answerElement.type = "radio";
      answerElement.name = "answer";
      answerElement.value = index;
      answerElement.id = `answer-${index}`;
  
      const labelElement = document.createElement("label");
      labelElement.textContent = answer;
      labelElement.htmlFor = `answer-${index}`;
  
      answersElement.appendChild(answerElement);
      answersElement.appendChild(labelElement);
    });
  }
  
  function submitAnswer() {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
  
    if (selectedAnswer) {
      const userAnswer = parseInt(selectedAnswer.value);
  
      if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion === questions.length) {
        showResult();
      } else {
        showQuestion();
      }
    }
  }
  
  function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
  }
  
  showQuestion();
  
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", submitAnswer);
  

