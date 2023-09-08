"use strict";

let currentDay = document.querySelector("#currentDay");
let currentUTC = document.querySelector("#UTC");

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let d = new Date();
let day = weekday[d.getDay()];
currentDay.innerText = day;

//UTC
let dn = new Date();
let ms = dn.getUTCMilliseconds();
UTC.innerText = ms;
