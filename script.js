var burger = document.querySelector(".burger");
var navigation = document.querySelector(".main-navigation");

function changeBurger(x) {
  x.classList.toggle("change");
  navigation.classList.toggle("show-nav");
}

//ОПЫТЫ

var links = document.querySelectorAll("a");

for (let k = 0; k < links.length; k++) {
  links[k].addEventListener("click", function () {
    localStorage.setItem("category", links[k].getAttribute("data"));
  });
}

console.log(localStorage["category"]);
var categoryName = localStorage.getItem("category");

if (categoryName == "actionA") {
  categoryName = actionA;
} else if (categoryName == "actionB") {
  categoryName = actionB;
} else if (categoryName == "actionC") {
  categoryName = actionC;
} else if (categoryName == "adjective") {
  categoryName = adjective;
} else if (categoryName == "animalA") {
  categoryName = animalA;
} else if (categoryName == "animalB") {
  categoryName = animalB;
} else if (categoryName == "clothes") {
  categoryName = clothes;
} else if (categoryName == "emotion") {
  categoryName = emotion;
}

var topicCards = document.querySelector(".topic-cards");
for (let i = 0; i < 8; i++) {
  let oneCard =
    '<div class="card">' +
    '<div class="front">' +
    '<img src="' +
    categoryName[i]["image"] +
    '" alt="" /><span class="name">' +
    categoryName[i]["word"] +
    '</span><span class="rotate"></span>' +
    "</div>" +
    '<div class="back">' +
    '<img src="' +
    categoryName[i]["image"] +
    '" alt="" /><span>' +
    categoryName[i]["translation"] +
    "</span>" +
    "</div>" +
    "</div>";
  topicCards.innerHTML += oneCard;
}

// конец ОПЫТОВ

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

function sayWord(topic, n) {
  console.log("start");
  var audio = new Audio();
  audio.src = topic[n]["audioSrc"];
  audio.autoplay = true;
}

var counter = 0;

function checkWord(topic, n) {
  setTimeout(alert("click on image"), 5000);

  topicCards.addEventListener("click", function (event) {
    console.log(event.target);
    event.stopPropagation();
    sraca = event.target.getAttribute("src").slice(4, -4);
    console.log(sraca);
    console.log(topic[n]["word"]);
    if (topic[n]["word"] == sraca) {
      console.log("+++");
      var audio = new Audio();
      audio.src = "./audio/success.mp3";
      audio.autoplay = true;
      counter++;
    } else {
      console.log("---");
      var audio = new Audio();
      audio.src = "./audio/error.mp3";
      audio.autoplay = true;
    }
    console.log(counter);
  });
}

var play = document.querySelector(".play");
var train = document.querySelectorAll(".train");
train[0].addEventListener("click", function () {
  train[0].classList.add("hide");
  play.classList.add("show");
  var categoryName = localStorage.getItem("category");
  if (categoryName == "actionA") {
    categoryName = actionA;
  } else if (categoryName == "actionB") {
    categoryName = actionB;
  } else if (categoryName == "actionC") {
    categoryName = actionC;
  } else if (categoryName == "adjective") {
    categoryName = adjective;
  } else if (categoryName == "animalA") {
    categoryName = animalA;
  } else if (categoryName == "animalB") {
    categoryName = animalB;
  } else if (categoryName == "clothes") {
    categoryName = clothes;
  } else if (categoryName == "emotion") {
    categoryName = emotion;
  }

  var topicCards = document.querySelector(".topic-cards");
  topicCards.innerHTML = "";
  for (let i = 0; i < 8; i++) {
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
});
