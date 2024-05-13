const qustionDataBase = [
  {
    question: "The banker's discount on a bill due 4 months hence at 15% is Rs. 420. The true discount is:",
    option1: "Rs 400",
    option2: "Rs 360",
    option3: "Rs 480",
    option4: "Rs 320",
    ans: "answer1",
  },
  {
    question: "The banker's discount on a sum of money for 1½ years is Rs. 558 and the true discount on the same sum for 2 years is Rs. 600. The rate percent is:",
    option1: "10%",
    option2: "13%",
    option3: "12%",
    option4: "15%",
    ans: "answer3",
  },
  {
    question: "In order to obtain an income of Rs. 650 from 10% stock at Rs. 96, one must make an investment of:",
    option1: "Rs 3100",
    option2: "Rs 6240",
    option3: "Rs 6500",
    option4: "Rs 9600",
    ans: "answer2",
  },
  {
    question: "Which is a better investment: 11% stock at 143 or 9¾% stock at 117?",
    option1: "11% stock at 143",
    option2: "9¾% stock at 117",
    option3: "Both are equally good",
    option4: "Cannot be compared, as the total amount of investment is not given.",
    ans: "answer1",
  },
  {
    question: "By investing in 16⅔% stock at 64, one earns Rs. 1500. The investment made is:",
    option1: "Rs 5640",
    option2: "Rs 5760",
    option3: "Rs 7500",
    option4: "Rs 9600",
    ans: "answer2",
  },
  {
    question: "One fast typist types some matter in 2 hours and another slow typist types the same matter in 3 hours. If both do combined work, how much time will they take to finish?",
    option1: "1hr 26min",
    option2: "1hr 30min",
    option3: "1hr 25min",
    option4: "1hr 12min",
    ans: "answer3",
  },
  {
    question: "Salary is increased by Rs. 1200, tax is decreased from 12% to 10% but paying the same amount as tax. What is the previous salary?",
    option1: "Rs 5670",
    option2: "Rs 4800",
    option3: "Rs 6000",
    option4: "Rs 6200",
    ans: "answer2",
  },
  {
    question: "There were 750 people when the first song was sung. After each song, 50 people are leaving the hall. How many songs are sung to make them zero?",
    option1: "20",
    option2: "16",
    option3: "14",
    option4: "18",
    ans: "answer1",
  },
  {
    question: "Which of the following statements is not correct?",
    option1: "log10 10 = 1",
    option2: "log (2 + 3) = log (2 x 3)",
    option3: "log10 1 = 0",
    option4: "log (1 + 2 + 3) = log 1 + log 2 + log 3",
    ans: "answer2",
  },
  {
    question: "If log 2 = 0.3010 and log 3 = 0.4771, the value of log5 512 is:",
    option1: "2.870",
    option2: "2.967",
    option3: "3.876",
    option4: "3.912",
    ans: "answer4",
  },
  {
    question: "A man purchased a cow for Rs. 3000 and sold it the same day for Rs. 3600, allowing the buyer a credit of 2 years. If the rate of interest be 10% per annum, then the man has a gain of:",
    option1: "0%",
    option2: "5%",
    option3: "7.5%",
    option4: "10%",
    ans: "answer1",
  },
  {
    question: "A trader owes a merchant Rs. 10,028 due 1 year hence. The trader wants to settle the account after 3 months. If the rate of interest is 12% per annum, how much cash should he pay?",
    option1: "Rs 9025.20",
    option2: "Rs 9200",
    option3: "Rs 9600",
    option4: "Rs 9560",
    ans: "answer1",
  },
];
  
  // getting referrence
  const questionContainer = document.querySelector("h3");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
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
    option3.innerText = list.option3;
    option4.innerText = list.option4;
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
  