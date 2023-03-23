/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const iconSuit = ["♦", "♥", "♠", "♣"];
  const numberSuit = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  const randomCard = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    return randomElement;
  };
  randomCard(iconSuit);
  randomCard(numberSuit);

  // let number = document.querySelector("#number");
  // let iconTop = document.querySelector("#icon-top");
  // let iconBottom = document.querySelector("#icon-bottom");

  // number.innerHTML = randomCard(numberSuit);
  // iconBottom.innerHTML = iconTop.innerHTML = randomCard(iconSuit);

  let button = document.querySelector("#btn");
  button.addEventListener("click", () => {
    let cards = document.querySelectorAll("#card");

    cards.forEach(card => {
      card.querySelector("#number").innerHTML = randomCard(numberSuit);
      card.querySelector("#icon-top").innerHTML = card.querySelector(
        "#icon-bottom"
      ).innerHTML = randomCard(iconSuit);
    });
  });
};

let button = document.querySelector("#btn");
button.addEventListener("click", () => {
  let card = document.querySelector("#card");
  let cloneCard = card.cloneNode(true);
  document.querySelector(".cardHolder").appendChild(cloneCard);
});
