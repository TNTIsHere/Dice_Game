let randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "img/dice" + randomNumber1 + ".png");
let randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "img/dice" + randomNumber2 + ".png")

function rollDice(){
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML= "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML= "Player 2 Wins!";
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML= "Draw!";
    }
}