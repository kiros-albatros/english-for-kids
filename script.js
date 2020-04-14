var burger = document.querySelector('.burger');
var navigation = document.querySelector('.main-navigation');

function changeBurger(x) {
    x.classList.toggle("change");
    navigation.classList.toggle("show-nav");
}