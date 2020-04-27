"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var indexpage = document.querySelector('body').classList.contains('index');
AOS.init({
  once: true,
  mirror: false
});
$('a[data-href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).data("href");
  $('html,body').animate({
    scrollTop: $(id).offset().top
  }, 1000);
  return false;
}); // window events ----

window.onload = function () {
  // if(!!chart) chartInit();
  var burger = document.querySelector('a.target-burger');
  burger.addEventListener('click', function (ev) {
    _toConsumableArray(document.querySelectorAll('.burger-el')).forEach(function (el) {
      el.classList.toggle('toggled');
    });
  });
}; // window.onresize = () => {
//   if (!!chart) chartInit();
// };
// // CHART ----
// const chart = document.querySelector('.rise');
// const pointData = [1, 1.45, 1.83, 2.27, 3.6, 4.1, 7.8, 15.6];
// const riseChart = document.querySelector('.rise-chart');
// const risePoints = document.querySelectorAll('.rise-point');
// const chartInit = () => {
//   const pointW = (riseChart.offsetWidth - 160) / risePoints.length;
//   risePoints.forEach((point, inx) => {
//     point.style.width = pointW + 'px';
//     point.style.left = `${80 + (inx ?  pointW * inx : 0)}px`;
//     point.style.top = `${inx ? 100 - (pointData[inx] * riseChart.offsetHeight / 100) : 100}%`;
//     point.querySelector('.btn').textContent = `${pointData[inx]}%`;
//     point.dataset.aos = 'zoom-in-up';
//     point.dataset.aosDelay = 200 * (inx + 1);
//     point.dataset.aosDuration = 800;
//   });
// };
// AOS animation


document.querySelectorAll('.aos-group').forEach(function (el) {
  el.querySelectorAll('[data-aos]').forEach(function (aos, index) {
    aos.dataset.aosDelay = 200 * (index + 1);
  });
});