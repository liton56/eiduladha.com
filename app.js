// Initialize Some VAriables
const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

// Countdown Function
function eidUlAdha() {
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let countDown = new Date('Jul 21, 2021, 00:00:00').getTime();
    let today = new Date().getTime();
    let gap = countDown - today;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

setInterval(() => {
    eidUlAdha();
}, 1000)