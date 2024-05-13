const qustionDataBase = [
  {
    question: "Do you like meeting new people?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you like helping people out?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Are you easily disappointed?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you set up long term goals?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Are you easily fazed?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Are you always busy?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you feel overwhelmed often?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you like solving complex problems?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you make people feel welcome?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you tend to always see the good in people, no matter what the circumstance is?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Are you generally passionate about social causes?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
  {
    question: "Do you prefer familiarity over unfamiliarity?",
    option1: "Yes",
    option2: "No",
    ans: "answer1",
  },
];
  
  // getting referrence
  const questionContainer = document.querySelector("h3");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const submitButton = document.querySelector("button");
  const usersAnswer = document.querySelectorAll(".answer");
  const scoreArea = document.querySelector("#ShowScore");
  
  // This function is rendering all the texts
  
  let questionCount = 0;
  let score = 0;
  const mainFunc = () => {
    const list = qustionDataBase[questionCount];
    questionContainer.innerText = list.question;
    option1.innerText = list.option1;
    option2.innerText = list.option2;
  };
  
  mainFunc();
  
  // this function is for answer checking
  
  const goCheckAnswer = () => {
    let answers;
    usersAnswer.forEach((data) => {
      if (data.checked) {
        answers = data.id;
      }
    });
    return answers;
  };
  
  const deselectAll = () => {
    usersAnswer.forEach((data) => {
      data.checked = false;
    });
  };
  
  submitButton.addEventListener("click", () => {
    const checkAnswer = goCheckAnswer();
    console.log(checkAnswer);
  
    if (checkAnswer === qustionDataBase[questionCount].ans) {
      score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < qustionDataBase.length) {
      mainFunc();
    } else {
      scoreArea.style.display = "block";
      scoreArea.innerHTML = `
        <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
        `;
    }
  });
  