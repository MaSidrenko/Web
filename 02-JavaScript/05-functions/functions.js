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
    // console.log(switchButton.attributes.src);
    // switchButton.attributes.src.nodeValue = switchButton.attributes.src.nodeValue == 'img/moon.png' ? 'img/sun.png' : 'img/moon.png'
    // console.log(switchButton.attributes.src.nodeValue);
    if(switchButton.attributes.src.nodeValue == 'img/moon.png') {
        switchButton.attributes.src.nodeValue = 'img/sun.png';
        document.body.style.backgroundColor = "black";
        document.body.style.color = "green";
    } else {
        switchButton.attributes.src.nodeValue = 'img/moon.png'
        document.body.style.backgroundColor = "wheat";
        document.body.style.color = "black";
    }
}