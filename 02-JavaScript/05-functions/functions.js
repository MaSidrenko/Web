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
    let delay = Number(document.getElementById('delay').value);
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    switchButton.style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
    console.log(switchButton.attributes);
}