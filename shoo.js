const background = document.createElement("div");

const div2 = document.createElement("div");
div2.classList.add("div2");

const dicediv = document.createElement("div");
dicediv.classList.add("dicediv");

const dicestack = document.createElement("div");
dicestack.classList.add("dicestack");

const diceimg = document.createElement("img");
diceimg.src = "./dice-1.png";
const diceimg2 = document.createElement("img");
diceimg2.src = "./dice-2-1.png";
const diceimg3 = document.createElement("img");
diceimg3.src = "./dice-3.png";
const diceimg4 = document.createElement("img");
diceimg4.src = "./dice-4.png";
const diceimg5 = document.createElement("img");
diceimg5.src = "./dice-5.png";
const diceimg6 = document.createElement("img");
diceimg6.src = "./dice-6.png";

const text = document.createElement("div");
text.classList.add("text");
text.innerHTML = "Shoo goo erguulerei :)";

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
      diceImage.src = "./dice-2-1.png";
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
    }
    if (too === 1) {
    }
  }
  setTimeout(shinecleh, 1000);
}
button.innerHTML = "Roll a Dice";
button.classList.add("button");
button.onclick = dice;

shoo.appendChild(diceImage);
dicediv.appendChild(shoo);
dicediv.appendChild(button);

background.appendChild(dicediv);
background.appendChild(text);
background.appendChild(div2);
div2.appendChild(dicediv);
background.appendChild(dicestack);
dicestack.appendChild(diceimg);
dicestack.appendChild(diceimg2);
dicestack.appendChild(diceimg3);
dicestack.appendChild(diceimg4);
dicestack.appendChild(diceimg5);
dicestack.appendChild(diceimg6);

document.body.appendChild(background);
