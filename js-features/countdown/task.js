let timer = document.querySelector("#timer");
let timerValue = timer.textContent.split(":");

let hh = timerValue[0];

let mm = timerValue[1];

let ss = timerValue[2];

let intervalId = setInterval(() => {
    countdownSs();
    countdownMm();
    countdownHh();
    
    timer.textContent = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;

    if (hh <= 0 && mm <= 0 && ss === 1) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

let countdownSs = () => {
    ss -= 1;
};

let countdownMm = () => {
    if (ss === 0) {
        mm -= 1;
        ss = 59;
    }
};

let countdownHh = () => {
    if (hh === 0) {
        return 0;
    }

    if (mm === 0) {
        hh -= 1
        mm = 59;
    }
};