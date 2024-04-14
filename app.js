let comPoints = 1;
let playerPoints = 1;
let player = document.querySelector(".player-points");
let coms = document.querySelector(".com-points");
let button = document.querySelector("button");
let moves = document.querySelectorAll(".imgs");

function comChoose() {
    let idx = Math.floor(Math.random()*3)
    let choosen = moves[idx].getAttribute("id");
    return choosen;
}

for(btn of moves) {
    btn.addEventListener("click",function() {
        let userInput = this.getAttribute("id");
        let comInput = comChoose();
        console.log (comInput); 
        if(userInput == "rock") {
            rock(userInput,comInput);
        } else if (userInput == "paper") {
            paper(userInput,comInput);
        } else if (userInput == "scissors") {
            scissors(userInput,comInput);
        }
    });
}

function rock(userInput,comInput) {
    userInput;
    if(comInput == "paper") {
        console.log("Computer Win");
        button.innerText = "You Loss";
        button.classList.remove("win");
        button.classList.add("loss");
        let cp = comPoints++;
        coms.innerHTML = (`${cp}`);
    } else if(comInput == "scissors") {
        console.log("user win");
        button.innerText = "You Win";
        button.classList.add("win");
        let pp = playerPoints++;
        player.innerHTML = (`${pp}`);
    } else if(comInput == "rock") {
        console.log("Match Draw");
        button.classList.remove("win");
        button.classList.remove("loss");
        button.innerText = "Match Draw";
    }
}

function paper(userInput,comInput) {
    userInput;
    if(comInput == "scissors") {
        console.log("Computer Win");
        button.innerText = "You Loss";
        button.classList.remove("win");
        button.classList.add("loss");
        let cp = comPoints++;
        coms.innerHTML = (`${cp}`);
    } else if(comInput == "rock") {
        console.log("user win");
        button.innerText = "You Win";
        button.classList.add("win");
        let pp = playerPoints++;
        player.innerHTML = (`${pp}`);
    } else if(comInput == "paper") {
        console.log("Match Draw");
        button.classList.remove("win");
        button.classList.remove("loss");
        button.innerText = "Match Draw";
    }
}

function scissors(userInput,comInput) {
    userInput;
    if(comInput == "rock") {
        console.log("Computer Win");
        button.innerText = "You Loss";
        button.classList.remove("win");
        button.classList.add("loss");
        let cp = comPoints++;
        coms.innerHTML = (`${cp}`);
    } else if(comInput == "paper") {
        console.log("user win");
        button.innerText = "You Win";
        button.classList.add("win");
        let pp = playerPoints++;
        player.innerHTML = (`${pp}`);
    } else if(comInput == "scissors") {
        console.log("Match Draw");
        button.classList.remove("win");
        button.classList.remove("loss");
        button.innerText = "Match Draw";
    }
}