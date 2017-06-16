var milisecs = 0;
secs = 0;
mins = 0;
hours = 0;
timerOut = document.getElementById('timer');
start = document.getElementById('start');
clear = document.getElementById('clear');
timerOn = 0;

timerOut.innerHTML = '00:00:00.000';

function timer() {
    if (timerOn == 1) {
        setTimeout(function() {
            milisecs++;
            if (milisecs >= 1000) {
                milisecs = 0;
                secs++;
                if (secs >= 60) {
                    secs = 0;
                    mins++;
                    if (mins >= 60) {
                        mins = 0;
                        hours++;
                    }
                }
            }
            timerOut.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (secs ? (secs > 9 ? secs : "0" + secs) : "00") + "." + (milisecs ? (milisecs < 10 ? "00" + milisecs : (milisecs > 99) ? milisecs : "0" + milisecs) : "000");
            timer();
        }, 1);
    }
};

function startTimer() {
    if (timerOn == 0) {
        timerOn = 1;
        timer();
        start.innerHTML = 'Pause';
        start.classList.remove('btn-success');
        start.classList.add('btn-primary')
    } else {
        timerOn = 0;
        start.innerHTML = 'Resume';
        start.classList.remove('btn-primary');
        start.classList.add('btn-success')
    }
};

function clearTimer() {
    clearInterval(timer);
    milisecs = -1;
    secs = 0;
    mins = 0;
    hours = 0;
    timerOn = 0;
    start.innerHTML = 'Start';
    start.classList.remove('btn-success');
    start.classList.add('btn-primary');
    timerOut.innerHTML = '00:00:00.000'
};

start.addEventListener('click', startTimer);
clear.addEventListener('click', clearTimer);
