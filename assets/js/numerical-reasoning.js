const qustionDataBase = [
  {
    question: "30 | 37 | 46 | 58 | 74 | 95 | ?\nWhat is the next number in the series?",
    option1: "127",
    option2: "27",
    option3: "111",
    option4: "126",
    ans: "answer1",
  },
  {
    question: "In a group of 25 teenagers, 12 enjoy playing sports. What is the probability that a teenager chosen at random enjoys playing sports?",
    option1: "0.48",
    option2: "0.12",
    option3: "0.37",
    option4: "0.52",
    ans: "answer3",
  },
  {
    question: "Please choose the correct answer. If none of the options are the correct answer please choose answer choice e, 'N'.",
    option1: "30",
    option2: "11.6",
    option3: "8.9",
    option4: "62",
    option5: "N",
    ans: "answer5",
  },
  {
    question: "There is a circular outdoor ice skating rink. The machine that prepares the rink for skating at the start of the day prepares 600 square feet of rink every hour. If the circumference of the rink is 200 feet, approximately how many minutes does it take the machine to prepare the entire rink for skating at the beginning of each day?",
    option1: "5",
    option2: "32",
    option3: "64",
    option4: "318",
    option5: "3183",
    ans: "answer4",
  },
  {
    question: "A computer service firm charges £98 per month for an on-site maintenance contract. If no maintenance contract is in place, the firm charges £432 for an on-site visit. How many call-outs per year would make the maintenance contract worthwhile?",
    option1: "2",
    option2: "3",
    option3: "4",
    option4: "5",
    option5: "6",
    ans: "answer3",
  },
  {
    question: "A boy takes 15 minutes to walk to school at a speed of 5 km/h. How many minutes would he take if he cycled at 15 km/h?",
    option1: "12",
    option2: "3",
    option3: "4",
    option4: "5",
    option5: "8",
    ans: "answer1",
  },
  {
    question: "The profits of a business are to be divided in the ratio 5 : 7. The smaller share amounts to £2000. What is the larger share?",
    option1: "£833",
    option2: "£11666",
    option3: "£2500",
    option4: "£2750",
    option5: "£2800",
    ans: "answer2",
  },
  {
    question: "On returning from a business trip an executive has remaining 250 German Marks and 478 French Francs. If the exchange rates are 3.24 marks = £1, and 9.9 francs = £1, how much British money will she receive for this currency?",
    option1: "£125.44",
    option2: "£77.16",
    option3: "£48.28",
    option4: "£111.26",
    option5: "£135.16",
    ans: "answer1",
  },
  {
    question: "Casual nursing staff are paid at a rate of £5.98 per hour. If 4 nurses each worked 39 hours, and three other nurses each worked 16 hours, what was the wage bill?",
    option1: "£1200",
    option2: "£1356.24",
    option3: "£1244.56",
    option4: "£1219.92",
    option5: "£1018.94",
    ans: "answer2",
  },
  {
    question: "In a survey carried out on 2400 people, 34% said that they preferred a new blend of coffee to their current blend. 35% were indifferent. The remainder disliked the new blend. How many people were in this category?",
    option1: "310",
    option2: "744",
    option3: "1020",
    option4: "556",
    option5: "675",
    ans: "answer4",
  },
  {
    question: "In a sale the price of TV set is discounted because the retailer says that he will pay the VAT of 17.5%. If the customer pays £225 what would the price have been including the VAT ?",
    option1: "£264.38",
    option2: "£270",
    option3: "£263.25",
    option4: "£311.10",
    option5: "£239.15",
    ans: "answer3",
  },
  {
    question: "In a large retail store employing 556 personnel, approximately 56% are female. Of the female employees, approximately 62% are aged between 48 and 60. How many employees are female and aged between 48 and 60 ?",
    option1: "225",
    option2: "219",
    option3: "345",
    option4: "193",
    option5: "312",
    ans: "answer5",
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
  