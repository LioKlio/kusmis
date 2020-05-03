"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-console */

/* eslint-disable max-len */

/* eslint-disable func-names */

/* eslint-disable no-trailing-spaces */

/* eslint-disable no-tabs */

/* eslint-disable indent */
// let indexpage = document.querySelector('body').classList.contains('index');
// -- AOS animation
document.querySelectorAll('.aos-group').forEach(function (el) {
  el.querySelectorAll('[data-aos]').forEach(function (aos, index) {
    aos.dataset.aosDelay = 200 * (index + 1);
  });
});
AOS.init({
  once: true,
  mirror: false
}); // -- SCROLL TO ELEMENT

$('a[data-href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(e.target).data('href');
  $('html,body').animate({
    scrollTop: $(id).offset().top
  }, 1000);
  return false;
}); // -- RANDOM POINTS POSITION

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRating() {
  var rating = getRandomInt(2) + 3;
  return rating > 5 ? rating - Math.random() : rating + Math.random();
}

var placeItRandom = function placeItRandom(els) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');
  els.forEach(function (el) {
    var elRating = getRating().toFixed(1);
    el.querySelector('.rating').textContent = elRating;
    el.querySelector('.stars').classList.add("stars-".concat(elRating > 4.4 ? 0 : elRating > 3.4 ? 1 : 2));
    var x = Math.floor(Math.random() * (parent.offsetWidth - el.offsetWidth));
    var y = Math.floor(Math.random() * (parent.offsetHeight / 2 - el.offsetHeight / 2));
    $(el).css({
      transform: "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(Math.random() < 0.4 ? Math.random() + 0.3 : Math.random(), ")"),
      display: 'flex'
    });
  });
}; // -- WINDOW EVENTS


window.onload = function () {
  var burger = document.querySelector('a.target-burger');
  burger.addEventListener('click', function () {
    _toConsumableArray(document.querySelectorAll('.burger-el')).forEach(function (el) {
      el.classList.toggle('toggled');
    });
  });
  placeItRandom(_toConsumableArray(document.querySelectorAll('.point')), document.querySelector('.area-of-points'));
};