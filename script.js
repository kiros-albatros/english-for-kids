const dataList = [actionA, actionB, actionC, adjective, animalA, animalB, clothes, emotion];


var burger = document.querySelector(".burger");
var navigation = document.querySelector(".main-navigation");
let mainPageBlock = document.querySelector(".categories");

function changeBurger(x) {
  x.classList.toggle("change");
  navigation.classList.toggle("show-nav");
}

//получаем название категории и сохраняем в локальном хранилище

var links = document.querySelectorAll("a");
var topicCards = document.querySelector(".topic-cards");
let cardsNumber = 8;
let gameMode = false;

for (let k = 0; k < links.length; k++) {
  links[k].addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("category", links[k].getAttribute("data"));
    if (this.getAttribute('data') !== "mainPage") {
      mainPageBlock.classList.remove('show-flex');
      mainPageBlock.classList.add('hide');
      let linkData = localStorage.getItem("category");
      linkData = Number(linkData);
      let categoryName = dataList[linkData];
      buildCards(categoryName);
      createCardActions();
    }
    if (this.getAttribute('data') == "mainPage") {
      mainPageBlock.classList.remove('hide');
      mainPageBlock.classList.add('show-flex');
      topicCards.innerHTML = '';
    }
  });
}

//строим карточки и отображаем

function buildCards(a) {
  topicCards.innerHTML = '';
  for (let i = 0; i < cardsNumber; i++) {
    let oneCard = `<div class="card">
    <div class="front">
    <img src="${a[i]["image"]}" alt="" />
    <span class="name">${a[i]["word"]}</span>
    <span class="rotate"></span></div>
    <div class="back">
    <img src="${a[i]["image"]}" alt="" /><span>
    ${a[i]["translation"]}</span></div></div>`;

    topicCards.innerHTML += oneCard;
  }
}

//поворот, озвучка

function createCardActions() {
  var rotate = document.querySelectorAll(".rotate");
  var cards = document.querySelectorAll(".card");
  var fronts = document.querySelectorAll(".front");
  var backs = document.querySelectorAll(".back");
  var names = document.querySelectorAll(".name");
  for (let i = 0; i < rotate.length; i++) {
    rotate[i].addEventListener("click", function (event) {
      event.stopPropagation();
      fronts[i].style.transform = "rotateY(180deg)";
      backs[i].style.transform = "rotateY(360deg)";
      cards[i].onmouseout = function () {
        fronts[i].style.transform = "rotateY(0deg)";
        backs[i].style.transform = "rotateY(180deg)";
      };
    });
  }

  for (let j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", function () {
      var audio = new Audio();
      audio.src = "./audio/" + names[j].innerHTML + ".mp3";
      audio.autoplay = true;
    });
  }
}

// РЕЖИМ ИГРЫ

var play = document.querySelector(".play");
var train = document.querySelector(".train");

play.addEventListener("click", function () { // выход из режима игры по клике на кнопку
  train.classList.remove("hide");
  play.classList.remove("show");
})


train.addEventListener("click", function () { // меняем кнопку на PLAY и начинаем строить игровую стр
  train.classList.add("hide");
  play.classList.add("show");
  gameMode = true;

  topicCards.innerHTML = "";
  let linkData = localStorage.getItem("category");
  linkData = Number(linkData);
  let categoryName = dataList[linkData];
  for (let i = 0; i < cardsNumber; i++) {
    let oneCard =
      '<div class="card">' +
      '<div class="front">' +
      '<img src="' +
      categoryName[i]["image"] +
      '" alt="" /> ' +
      "</div>" +
      "</div>";
    topicCards.innerHTML += oneCard;
  }

  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.border = "2px solid orange";
  }

  function sayWord(j) {
    let linkData = localStorage.getItem("category");
    linkData = Number(linkData);
    let categoryName = dataList[linkData];
    var audio = new Audio();
    audio.src = categoryName[j].audioSrc;
    audio.autoplay = true;
  }

  for (let j = 0; j < cardsNumber; j++) {
    setTimeout(() => sayWord(j), (j * 3000));
  }
});