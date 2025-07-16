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