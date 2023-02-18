const nextYear = document.querySelector("#nextYear");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let date = new Date();
let newYearTime = new Date("Jan 1 2024").getTime();

function update() {
  const timeNow = new Date().getTime();
  const timeGap = newYearTime - timeNow;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(timeGap / day);
  const h = Math.floor((timeGap % day) / hour);
  const m = Math.floor((timeGap % hour) / minute);
  const s = Math.floor((timeGap % minute) / second);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

  setTimeout(update, 1000);
}

update();
