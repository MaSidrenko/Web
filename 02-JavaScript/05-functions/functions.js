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
    console.log("Объект файла, в нашем случаее картинки (C названием, типом, весом и т.д.): ")
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
    
    document.getElementById("year").innerHTML =     addLeadingZero(time.getFullYear());
    document.getElementById("month").innerHTML =    addLeadingZero(time.getMonth() + 1);
    document.getElementById("day").innerHTML =      addLeadingZero(time.getDate());

    document.getElementById('weekday').innerHTML = time.toLocaleDateString("en-US", {weekday:'long'});
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