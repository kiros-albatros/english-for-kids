var burger = document.querySelector('.burger');
var navigation = document.querySelector('.main-navigation');

function changeBurger(x) {
    x.classList.toggle("change");
    navigation.classList.toggle("show-nav");
}

var rotate = document.querySelectorAll('.rotate');
var cards = document.querySelectorAll('.card');
var fronts = document.querySelectorAll('.front');
var backs = document.querySelectorAll('.back');
for (let i = 0; i < rotate.length; i++) {
    rotate[i].addEventListener('click', function () {
        fronts[i].style.transform = "rotateY(180deg)";
        backs[i].style.transform = "rotateY(360deg)";
        cards[i].onmouseout = function () {
            fronts[i].style.transform = "rotateY(0deg)";
            backs[i].style.transform = "rotateY(180deg)";
        }
    })
}