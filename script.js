let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTime, 10); // Update every 10 milliseconds
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
}

function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  displayTime();
}

function displayTime() {
  displayHours.textContent = padTime(hours);
  displayMinutes.textContent = padTime(minutes);
  displaySeconds.textContent = padTime(seconds);
  displayMilliseconds.textContent = padMilliseconds(milliseconds);
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}

function padMilliseconds(time) {
  if (time < 10) {
    return '00' + time;
  } else if (time < 100) {
    return '0' + time;
  } else {
    return time;
  }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
