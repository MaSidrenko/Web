function calculate() {
    let base = Number(document.getElementById('base').value);
    let exponent = Number(document.getElementById('exponent').value);

    document.getElementById('power').value = Power(base, exponent);
}
function Power(base, exponent) {
    return base ** exponent;
}
function SwitchBackground() {
    let switchButton = document.getElementById('background_switch');
    let secondSwitchButton = document.getElementById('background_switch_second');
    let delay = Number(document.getElementById('delay').value);
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    // switchButton.style.transition = `background-image ${delay}s`;
    switchButton.style.transition = `opacity ${delay}s`;
    secondSwitchButton.style.transition = `opacity ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
    console.log(switchButton.attributes);
}

document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
});

function setImage() {
    // let img = new Image();
    // let file_name = document.getElementById("image-file").value;
    // console.log(file_name);
    // console.log(file_name.split('\\'));
    // let splited_filename = file_name.split('\\');
    // // document.getElementById("photo").attributes.src = splited_filename
    // // [splited_filename.lenght - 1]
    // img.src = splited_filename[splited_filename.length - 1];
    // console.log(splited_filename[splited_filename.length - 1]);
    // document.getElementById("photo").attributes.src = splited_filename[splited_filename.length - 1];
    // console.log(document.getElementById("photo").src)
    let file_name = document.getElementById("image-file");
    let = file = file_name.files[0];
    console.log("Объект файла, в нашем случаее картинки (C названием, типом, весом и т.д.): ");
    console.log(file);
    console.log("========================");
    let imageUrl = URL.createObjectURL(file);
    console.log("Временная ссылка на путь к файлу: ")
    console.log(imageUrl);
    console.log("========================");
    let imgElement = document.getElementById("photo");
    imgElement.src = imageUrl;
    console.log("Тег <img> после всех изменений: ");
    console.log(imgElement);
    console.log("========================");
}

document.body.onload = function tick_timer() {
    let time = new Date();
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

    document.getElementById("year").innerHTML = addLeadingZero(time.getFullYear());
    document.getElementById("month").innerHTML = addLeadingZero(time.getMonth() + 1);
    document.getElementById("day").innerHTML = addLeadingZero(time.getDate());

    document.getElementById('weekday').innerHTML = time.toLocaleDateString("en-US", { weekday: 'long' });
    // if(document.getElementById("show-date").checked) {
    //     document.getElementById("current-date").style.visibility = "visible";
    // }
    // else {
    //     document.getElementById("current-date").style.visibility = "hidden";
    //     // document.getElementById("current-date").innerHTML = "";
    // }
    document.getElementById("current-date").style.visibility =
        document.getElementById("show-date").checked ? "visible" : "hidden";
    document.getElementById("weekday").style.visibility =
        document.getElementById("show-weekday").checked ? "visible" : "hidden";
    setTimeout(tick_timer, 100) //ф-ция setTimeout(function delay), вызавает function с delay
}

function addLeadingZero(num) {
    return num < 10 ? "0" + num : num;
}

document.getElementById("btnStart").onclick = function startCountdownTimer() {
    let targetDate = document.getElementById("targetDate");
    let targetTime = document.getElementById("targetTime");
    let btnStart = document.getElementById("btnStart");
    targetDate.disabled = targetTime.disabled = !targetDate.disabled;
    if (btnStart.value === "Start") {
        btnStart.value = "Stop";
        tickCountdown();
    } else {
        btnStart.value = "Start";
    }
}

function tickCountdown() {
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOURS = SECONDS_IN_MINUTE * 60;
    const SECONDS_IN_DAY = SECONDS_IN_HOURS * 24;
    const SECONDS_IN_WEEK = SECONDS_IN_DAY * 7;
    const DAYS_IN_MONTH = 365.25 / 12;
    const SECONDS_IN_MONTH = SECONDS_IN_DAY * DAYS_IN_MONTH;
    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOURS * 6;

    if (!document.getElementById("targetTime").disabled) return;
    let now = new Date();
    let targetDateControl = document.getElementById("targetDate");
    let targetTimeControl = document.getElementById("targetTime");

    let targetDate = targetDateControl.valueAsDate;
    let targetTime = targetTimeControl.valueAsDate;

    targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
    targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset() / 60);

    targetTime.setFullYear(targetDate.getFullYear());
    targetTime.setMonth(targetDate.getMonth());
    targetTime.setDate(targetDate.getDate());


    let duration = targetTime - now;
    let timestamp = Math.floor(duration / 1000);
    document.getElementById("result").innerHTML = timestamp;
    // Разность дат вычисляется в формате Timestamp
    // Timestamp - это количество миллисекунд от 1 января 1970

    let time_of_day = timestamp % SECONDS_IN_DAY;
    //Убираем время дня из timestamp:
    let date = Math.floor(timestamp / SECONDS_IN_DAY);
    date = date * SECONDS_IN_DAY;
    let str_date = "";
    let years = Math.floor(date / SECONDS_IN_YEAR); str_date += `Years: ${years}\n`;
    if (years != 0) {
        date = (date % (years * SECONDS_IN_YEAR))
        let year_unit = document.getElementById("years-unit");
        if (year_unit == null) {
            let display = document.getElementById("display");
            display.prepend(createTimeBlock("years", years));
        } else {
            year_unit.innerHTML = years;
        }
    } 
    else {
        removeTimeBlock("years");
    }
    
    let monthes = Math.floor(date / SECONDS_IN_MONTH); str_date += `Mounthes: ${monthes}\n`;
    if (monthes > 0) date = (date % (monthes * SECONDS_IN_MONTH))
    let weeks = Math.floor(date / SECONDS_IN_WEEK); str_date += `Weeks: ${weeks}\n`;
    if (weeks > 0) date = (date % (weeks * SECONDS_IN_WEEK))
    let days = Math.ceil(date / SECONDS_IN_DAY); str_date += `Days: ${days}\n`;
    // if (days > 0) date = (date % (years * SECONDS_IN_DAY))
    console.log(str_date);
    console.log('|===========================================================|');
    let hours = Math.floor(time_of_day / SECONDS_IN_HOURS);
    console.log(`hours: ${hours}`);
    console.log('|===========================================================|');
    if (hours > 0) time_of_day = (time_of_day % (hours * SECONDS_IN_HOURS));

    let minutes = Math.floor(time_of_day / SECONDS_IN_MINUTE);
    console.log(`minutes: ${minutes}`);
    console.log('|===========================================================|');
    if (minutes > 0) time_of_day = (time_of_day % (minutes * SECONDS_IN_MINUTE));

    let seconds = time_of_day;
    console.log(`seconds: ${seconds}`);
    console.log('|===========================================================|');

    document.getElementById("hours-unit").innerHTML = addLeadingZero(hours);
    document.getElementById("minutes-unit").innerHTML = addLeadingZero(minutes);
    document.getElementById("seconds-unit").innerHTML = addLeadingZero(seconds);

    document.getElementById("target-date-value").innerHTML = targetDate;
    document.getElementById("target-time-value").innerHTML = targetTime;

    setTimeout(tickCountdown, 100);
}


function createTimeBlock(name, value) {
    let time_block = document.createElement("div");
    time_block.className = "time-block";
    let unit = document.createElement("div");
    unit.id = `${name}-unit`
    unit.className = "time-unit";
    unit.innerHTML = addLeadingZero(value);

    let marker = document.createElement("div");
    marker.id = `${name}-marker`;
    marker.className = "time-marker";
    marker.innerHTML = name;

    time_block.append(unit);
    time_block.append(marker);

    return time_block;
}
function removeTimeBlock(name) {
    let unit = document.getElementById(`${name}-unit`);
    if (unit != null) {
        let block = unit.parentElement;
        let block_parent = block.parentElement;
        block_parent.removeChild(block);
    }
}