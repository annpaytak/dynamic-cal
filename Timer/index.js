var taimerId, stopwatchId;
var timer_func_status, timer_stop_status = false;
var timer_stop_value;

function currentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDateDiv = document.getElementsByClassName('current_date')[0];
    currentDateDiv.innerHTML = addZero(day) + '.' + addZero((month + 1)) + '.' + year;
}
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
currentDate();

function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentTimeDiv = document.getElementsByClassName('current_time')[0];
    currentTimeDiv.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}
setInterval(currentTime, 1000);
currentTime();

function addPoint() {
    let minuteNumber = document.getElementById('min_num');
    let temp = Number(minuteNumber.innerHTML) + 1;
    if (temp <= 60) {
        minuteNumber.innerHTML = temp;
    } else {
        event.preventDefault();
    }
}

function subtractPoint() {
    let minuteNumber = document.getElementById('min_num');
    let temp = Number(minuteNumber.innerHTML) - 1;
    if (temp >= 1) {
        minuteNumber.innerHTML = temp;
    } else {
        event.preventDefault();
    }
}


function timerStart() {
    let minuteNumber = document.getElementById('min_num');
    let minutesSpan = document.getElementById('minutes');
    let secondsSpan = document.getElementById('seconds');
    minutesSpan.innerHTML = minuteNumber.innerHTML;
    if (timer_stop_status) { 
        minutesSpan.innerHTML = timer_stop_value;
    }
    if (timer_func_status) {
        minutesSpan.innerHTML = minuteNumber.innerHTML;
    }
    let minutesValue = Number(minutesSpan.innerHTML);
    let secondsValue = Number(secondsSpan.innerHTML);

    taimerId = setInterval(() => {
        if (secondsValue == 0){
            secondsValue = 60;
            minutesValue--;
        }
        secondsValue--;
        minutesSpan.innerHTML = addZero(minutesValue);
        secondsSpan.innerHTML = addZero(secondsValue);
        if(secondsValue == 0 && minutesValue == 0){
            clearInterval(taimerId);
        }
    }, 1000);

}

function timerStop() {
    let stopBtn = document.getElementById('timer_stop');
    stopBtn.addEventListener('click', function () {
        let minutes = document.getElementById('minutes');
        timer_stop_value = minutes.innerHTML;
        clearInterval(taimerId);
        timer_stop_status = true;
        timer_func_status = false;
    });
}
timerStop();


function timerReset() {
    let minutesSpan = document.getElementById('minutes');
    let secondsSpan = document.getElementById('seconds');
    clearInterval(taimerId);
    minutesSpan.innerHTML = addZero(0);
    secondsSpan.innerHTML = addZero(0);
    timer_func_status = true;
    timer_stop_status = false;
}

function startStopwatch() {
    let sw_hours = document.getElementById('stopwatch_hours');
    let sw_minutes = document.getElementById('stopwatch_minutes');
    let sw_seconds = document.getElementById('stopwatch_seconds');
    let sw_ms = document.getElementById('stopwatch_ms');

    let sw_hours_value = Number(sw_hours.innerHTML);
    let sw_ms_value = Number(sw_ms.innerHTML);
    let sw_seconds_value = Number(sw_seconds.innerHTML);
    let sw_min_value = Number(sw_minutes.innerHTML);

    stopwatchId = setInterval(() => {
        sw_ms_value++;
        sw_ms.innerHTML = addZero(sw_ms_value);
        if (sw_ms_value == 10){
            sw_ms_value = 0;
            sw_ms.innerHTML = addZero(sw_ms_value);
            sw_seconds_value++;
            sw_seconds.innerHTML = addZero(sw_seconds_value);
        }
        if(sw_seconds_value == 60){
            sw_seconds_value = 0;
            sw_seconds.innerHTML = addZero(sw_seconds_value);
            if (sw_seconds_value == 0){
                sw_min_value++;
                sw_minutes.innerHTML = addZero(sw_min_value);
            }
        }
        if(sw_min_value == 60) {
            sw_min_value = 0;
            sw_minutes.innerHTML = addZero(sw_min_value);
            sw_hours_value++;
            sw_hours.innerHTML = addZero(sw_hours_value);
        }
    }, 100);
}

function loopStopwatch(){
    let sw_hours = document.getElementById('stopwatch_hours');
    let sw_minutes = document.getElementById('stopwatch_minutes');
    let sw_seconds = document.getElementById('stopwatch_seconds');
    let sw_ms = document.getElementById('stopwatch_ms');
    let divList = document.getElementsByClassName('stopwatch_values')[0];

    sw_hours_value = sw_hours.innerHTML;
    sw_minutes_value = sw_minutes.innerHTML;
    sw_seconds_value = sw_seconds.innerHTML;
    sw_ms_value = sw_ms.innerHTML;
    divListValue = divList.innerHTML;

    divListValue += `${sw_hours_value}:${sw_minutes_value}:${sw_seconds_value}:${sw_ms_value}<br>`;
    divList.innerHTML = divListValue;
}

function stopStopwatch(){
    clearInterval(stopwatchId);
}

function resetStopwatch(){
    let sw_hours = document.getElementById('stopwatch_hours');
    let sw_minutes = document.getElementById('stopwatch_minutes');
    let sw_seconds = document.getElementById('stopwatch_seconds');
    let sw_ms = document.getElementById('stopwatch_ms');

    clearInterval(stopwatchId);

    sw_hours.innerHTML = addZero(0);
    sw_minutes.innerHTML = addZero(0);
    sw_seconds.innerHTML = addZero(0);
    sw_ms.innerHTML = addZero(0);

}

