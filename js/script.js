const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const openingDay = "3 Sep 2022";

//declare the countdown calculation 

function countdown() {
    const startingDay = new Date(openingDay);
    const currentDay = new Date();

    const totalSeconds = (startingDay - currentDay) /1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    // return the HTML in the page
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    

}

// declare anothe function to return the formatTime
function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

countdown();

setInterval(countdown, 1000);