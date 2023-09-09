"use strict";

let today = new Date();

function currentDay() {
  let day = today.getUTCDay();

  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `Today is: ${dayList[day]}.`;
  //   days.innerText = currentDay;
}

const clock = document.querySelector(".time");
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDay();

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());
let miliSeconds = addZero(today.getMilliseconds());

let currentTime = `Time is: ${hours}:${minutes}:${seconds}`;
clock.innerText = currentTime;
