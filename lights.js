script.js
const redLight = document.getElementById('redLight');
const greenLight = document.getElementById('greenLight');
const yellowLight = document.getElementById('yellowLight');

function trafficLight() {
    let redLightDuration = Math.floor(Math.random() * 3) + 6;
    let greenLightDuration = Math.floor(Math.random() * 3) + 6;

    redLight.style.backgroundColor = 'red';
    greenLight.style.backgroundColor = 'darkgray';
    yellowLight.style.backgroundColor = 'darkgray';

    setTimeout(() => {
        redLight.style.backgroundColor = 'darkgray';
        greenLight.style.backgroundColor = 'green';
        yellowLight.style.backgroundColor = 'darkgray';

        setTimeout(() => {
            yellowLight.style.backgroundColor = 'yellow';
            redLight.style.backgroundColor = 'darkgray';
            greenLight.style.backgroundColor = 'darkgray';

            setTimeout(() => {
                trafficLight();
            }, 2000);
        }, greenLightDuration * 1000);
    }, redLightDuration * 1000);
}

trafficLight();