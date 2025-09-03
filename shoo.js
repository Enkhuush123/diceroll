const background = document.createElement("div");

const button = document.createElement("button");

const shoo = document.createElement("div");
const diceImage = document.createElement("img");

function dice() {
  const too = Math.floor(Math.random() * 6) + 1;
  diceImage.src = "./dice-roll-dice.gif";

  function shinecleh() {
    if (too === 1) {
      diceImage.src = "./dice-1.png";
    }
    if (too === 2) {
      diceImage.src = "./dice-2.png";
    }
    if (too === 3) {
      diceImage.src = "./dice-3.png";
    }
    if (too === 4) {
      diceImage.src = "./dice-4.png";
    }
    if (too === 5) {
      diceImage.src = "./dice-5.png";
    }
    if (too === 6) {
      diceImage.src = "./dice-6.png";
    }
    if (too === 6) {
      alert("tiimee! ci aztai yma");
      innerHTML = "onts";
    }
    if (too === 1) {
      alert("loser");
    }
  }
  setTimeout(shinecleh, 1000);
}
button.innerHTML = "Roll a Dice";
button.classList.add("button");
button.onclick = dice;

shoo.appendChild(diceImage);
background.appendChild(shoo);
background.appendChild(button);

document.body.appendChild(background);
