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
var categoryName = localStorage.getItem('category');

if (categoryName == 'actionA') {
    categoryName = actionA;
} else if (categoryName == 'actionB') {
    categoryName = actionB;
} else if (categoryName == 'actionC') {
    categoryName = actionC;
} else if (categoryName == 'adjective') {
    categoryName = adjective;
} else if (categoryName == 'animalA') {
    categoryName = animalA;
} else if (categoryName == 'animalB') {
    categoryName = animalB;
} else if (categoryName == 'clothes') {
    categoryName = clothes;
} else if (categoryName == 'emotion') {
    categoryName = emotion;
}

var topicCards = document.querySelector(".topic-cards");
for (let i = 0; i < 8; i++) {
    let oneCard =
        '<div class="card">' +
        '<div class="front">' +
        '<img src="' + categoryName[i]['image'] + '" alt="" /><span class="name">' +
        categoryName[i]['word'] +
        '</span><span class="rotate"></span>' +
        "</div>" +
        '<div class="back">' +
        '<img src="' + categoryName[i]['image'] + '" alt="" /><span>' + categoryName[i]['translation'] + '</span>' +
        "</div>" +
        "</div>";
    topicCards.innerHTML += oneCard;
};

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