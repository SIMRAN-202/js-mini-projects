const targetDate = new Date("January 1, 2026 00:00:00").getTime()

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function updateCountdown(){
    const now = new Date().getTime()
    const gap = targetDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    if (gap <= 0) {
    clearInterval(timerInterval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    document.querySelector("h1").textContent = "🎉 Happy New Year!";
}
}

const timerInterval = setInterval(updateCountdown, 1000);