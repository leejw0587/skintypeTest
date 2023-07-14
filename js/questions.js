import { questions } from "./data.js";

const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
const choice3El = document.querySelector(".choice3");
const choice4El = document.querySelector(".choice4");

let currentNumber = 0;
let skinType = "";

function renderQuestion() {
	const question = questions[currentNumber];
	numberEl.innerHTML = question.number;
	questionEl.innerHTML = question.question;
	choice1El.innerHTML = question.choices[0].text;
	choice2El.innerHTML = question.choices[1].text;
	choice3El.innerHTML = question.choices[2].text;
	choice4El.innerHTML = question.choices[3].text;
	progressValueEl.style.width = (currentNumber + 1) * 20 + "%";

  console.log(currentNumber);
}

function nextQuestion(choiceNumber) {
	const question = questions[currentNumber];
	skinType += question.choices[choiceNumber].value;

	if (currentNumber === questions.length - 1) {
		console.log(skinType);
		showResultPage(skinType);
		return;
	}
	
	currentNumber++;
	renderQuestion();
}

function showResultPage(skinType) {
    let count = {d: 0, o: 0, m: 0, n: 0};

    // Count the occurrences of each character
    for (let char of skinType) {
        count[char]++;
    }

    let maxCount = Math.max(...Object.values(count));
    let maxChar = Object.keys(count).filter(key => count[key] === maxCount);
	
	console.log(maxChar)

    if (maxChar.length != 1) {
        window.location.href = "results.html?skinType=n";
    } else {
        window.location.href = "results.html?skinType=" + maxChar[0];
    }
}

choice1El.addEventListener("click", () => {
	nextQuestion(0);
});

choice2El.addEventListener("click", () => {
	nextQuestion(1);
});

choice3El.addEventListener("click", () => {
	nextQuestion(2);
});

choice4El.addEventListener("click", () => {
	nextQuestion(3);
});

renderQuestion();
