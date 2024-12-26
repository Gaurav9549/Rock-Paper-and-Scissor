const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const crossButton = document.querySelector("#crossBtn");
const ruleButton = document.querySelector(".ruleBtn");
const ruleArea = document.querySelector(".rules");
const newRuleArea = document.querySelector("#newRuleBtn");
const nxtBtn = document.querySelector("#nextBtn");
const myContainer = document.querySelector(".container");
const myScoreCont = document.querySelector(".scoreCont");
const userSel = document.querySelector("#userSelection");
const compSel = document.querySelector("#compSelection");
const myResultCard = document.querySelector(".resultCard");
const resInterface = document.querySelector(".resultInterface");
const winInterface = document.querySelector(".finalInterface");
const choices = document.querySelector(".symbol");
const playAgain = document.querySelector("#playAgainBtn");
const rockSel = document.querySelector("#rockid");
const paperSel = document.querySelector("#paperid");
const scissorSel = document.querySelector("#scissorid");
const compPaper = document.querySelector("#compPaper");
const compRock = document.querySelector("#compRock");
const buttonPanel = document.querySelector(".buttonpanel");
const compScissor = document.querySelector("#compScissor");
const decision = document.querySelector("#winSpan");
var compPoint = document.querySelector("#compPoint");
var userPoint = document.querySelector("#userPoint");
var userScore = 0;
var compScore = 0;
const against = document.querySelector("#againSpan");
const reset = document.querySelector("#resetBtn");

var computerChoice;

function getRandomChoice() {
    const options = [compPaper, compRock, compScissor];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Load scores from local storage when the page loads
window.addEventListener("load", () => {
    const savedUserScore = localStorage.getItem("userScore");
    const savedCompScore = localStorage.getItem("compScore");

    if (savedUserScore !== null) {
        userScore = parseInt(savedUserScore);
        userPoint.innerHTML = userScore;
    }

    if (savedCompScore !== null) {
        compScore = parseInt(savedCompScore);
        compPoint.innerHTML = compScore;
    }
});

function initializeGame() {
    computerChoice = getRandomChoice();
    computerChoice.style.display = "inline";
    if (computerChoice == compPaper) {
        compSel.style.border = "16px solid #FFA943";
    } else if (computerChoice == compRock) {
        compSel.style.border = "16px solid #0074B6";
    } else {
        compSel.style.border = "16px solid #BD00FF";
    }
}

// Function to update scores in local storage
function updateScores() {
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("compScore", compScore);
}

playAgain.addEventListener("click", () => {
    choices.style.display = "flex";
    resInterface.style.display = "none";
    myResultCard.style.display = "none";
    nxtBtn.style.display = "none";

    [compPaper, compRock, compScissor].forEach(option => (option.style.display = "none"));

    computerChoice = getRandomChoice();
    computerChoice.style.display = "inline";
    if (computerChoice == compPaper) {
        compSel.style.border = "16px solid #FFA943";
    } else if (computerChoice == compRock) {
        compSel.style.border = "16px solid #0074B6";
    } else {
        compSel.style.border = "16px solid #BD00FF";
    }
});

initializeGame();

crossButton.addEventListener("click", () => {
    ruleArea.style.display = "none";
});
ruleButton.addEventListener("click", () => {
    ruleArea.style.display = "block";
});
newRuleBtn.addEventListener("click", () => {
    ruleArea.style.display = "block";
});

nxtBtn.addEventListener("click", () => {
    myScoreCont.style.display = "none";
    userSel.style.display = "none";
    compSel.style.display = "none";
    myResultCard.style.display = "none";
    resInterface.style.display = "none";
    winInterface.style.display = "flex";
    buttonPanel.style.display = "none";
});

rockBtn.addEventListener("click", () => {
    choices.style.display = "none";
    resInterface.style.display = "flex";
    myResultCard.style.display = "flex";
    ruleArea.style.marginRight = "0px";
    rockSel.style.display = "inline";
    userSel.style.border = '16px solid #0074B6';
    paperSel.style.display = "none";
    scissorSel.style.display = "none";
    chooseWinner("rock");
});

paperBtn.addEventListener("click", () => {
    choices.style.display = "none";
    resInterface.style.display = "flex";
    myResultCard.style.display = "flex";
    ruleArea.style.marginRight = "0px";
    paperSel.style.display = "inline";
    userSel.style.border = 'solid 16px #FFA943';
    rockSel.style.display = "none";
    scissorSel.style.display = "none";
    chooseWinner("paper");
});

scissorBtn.addEventListener("click", () => {
    choices.style.display = "none";
    resInterface.style.display = "flex";
    myResultCard.style.display = "flex";
    ruleArea.style.marginRight = "0px";
    scissorSel.style.display = "inline";
    userSel.style.border = 'solid 16px #BD00FF';
    rockSel.style.display = "none";
    paperSel.style.display = "none";
    chooseWinner("scissor");
});

function chooseWinner(userChoice) {
    if (userChoice == "rock" && computerChoice == compPaper) {
        compScore++;
        decision.innerHTML = "YOU LOSE";
        against.style.display = "inline";
    } else if (userChoice == "rock" && computerChoice == compScissor) {
        userScore++;
        decision.innerHTML = "YOU WIN";
        against.style.display = "inline";
    } else if (userChoice == "rock" && computerChoice == compRock) {
        decision.innerHTML = "TIE UP";
        against.style.visibility = "hidden";
    } else if (userChoice == "paper" && computerChoice == compPaper) {
        decision.innerHTML = "TIE UP";
        against.style.visibility = "hidden";
    } else if (userChoice == "paper" && computerChoice == compScissor) {
        compScore++;
        decision.innerHTML = "YOU LOSE";
        against.style.display = "inline";
    } else if (userChoice == "paper" && computerChoice == compRock) {
        decision.innerHTML = "YOU WIN";
        userScore++;
        against.style.display = "inline";
    } else if (userChoice == "scissor" && computerChoice == compPaper) {
        userScore++;
        decision.innerHTML = "YOU WIN";
        against.style.display = "inline";
    } else if (userChoice == "scissor" && computerChoice == compScissor) {
        decision.innerHTML = "TIE UP";
        against.style.visibility = "hidden";
    } else if (userChoice == "scissor" && computerChoice == compRock) {
        compScore++;
        decision.innerHTML = "YOU LOSE";
        against.style.display = "inline";
    }

    if (decision.innerHTML == "YOU LOSE") {
        against.style.visibility = "visible";
        userSel.style.boxShadow = "none";
        compSel.style.animation = "greenPulse 2.5s infinite";
        userSel.style.animation = "";
        compSel.style.boxShadow = `
            0 0 0 20px rgba(40, 154, 39, 0.8), 
            0 0 0 40px rgba(44, 150, 41, 0.7), 
            0 0 0 60px rgba(102, 178, 72, 0.4)
        `;
        nxtBtn.style.display = "none";
    } else if (decision.innerHTML == "YOU WIN") {
        against.style.visibility = "visible";
        compSel.style.boxShadow = "none";
        userSel.style.animation = "greenPulse 2.5s infinite";
        compSel.style.animation = "";
        userSel.style.boxShadow = `
            0 0 0 20px rgba(40, 154, 39, 0.8), 
            0 0 0 40px rgba(44, 150, 41, 0.7), 
            0 0 0 60px rgba(102, 178, 72, 0.4)
        `;
        nxtBtn.style.display = "flex";
    } else {
        userSel.style.boxShadow = "none";
        compSel.style.boxShadow = "none";
        userSel.style.animation = "";
        compSel.style.animation = "";
        nxtBtn.style.display = "none";
    }

    compPoint.innerHTML = compScore;
    userPoint.innerHTML = userScore;

    // Save scores to local storage
    updateScores();
}

