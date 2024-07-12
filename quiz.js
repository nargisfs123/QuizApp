const quizData = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;
let correct = 0, incorrect = 0, total = quizData.length;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const container = document.querySelector(".container");

const quizEnd = () => {
    container.innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hi, you've scored ${correct} / ${total} </h3>
            <button id="btn">Start Over</button>
        </div>
    `;

    const button = document.querySelector("#btn");
    button.addEventListener("click", () => {
        index = 0;
        correct = 0;
        incorrect = 0;
        container.innerHTML = `
        <div  class="col">
        <h3 id="questionBox">
            1) Lorem ipsum dolor sit amet, consectetur adipisicing elit Debitis?
        </h3>
    </div>
    <div class="col box">
        <input name="option" type="radio" id="first" value="a" required>
        <label for="first">Testing 1</label>
    </div>
    <div class="col box">
        <input name="option" type="radio" id="second" value="b" required>
        <label for="second">Testing 2</label>
    </div>
    <div class="col box">
        <input name="option" type="radio" id="third" value="c" required>
        <label for="third">Testing 3</label>
    </div>
    <div class="col box">
        <input name="option" type="radio" id="fourth" value="d" required>
        <label for="fourth">Testing 4</label>
    </div>
    <button id="submit">Submit</button>
        `;
        
        // Reassign questionBox and allInputs
        questionBox = document.getElementById("questionBox");
        allInputs = document.querySelectorAll("input[type='radio']");
        document.querySelector("#submit").addEventListener("click", submitAnswer);
        loadQuestion();
    });
};

const loadQuestion = () => {
    if (total === index) {
        document.querySelector("#submit").style.display = "none";
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}. ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
};

const submitAnswer = () => {
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
};

const reset = () => {
    allInputs.forEach((inputEl) => {
        inputEl.checked = false;
    });
};

document.querySelector("#submit").addEventListener("click", submitAnswer);

loadQuestion();