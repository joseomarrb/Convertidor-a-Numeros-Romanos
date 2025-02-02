//Variables
const inputNumber = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

//Eventos
convertBtn.addEventListener('click', checkInput);

//Funciones
function checkInput() {
    const inputNumberConvert = parseInt(inputNumber.value);
    if (!inputNumber.value.trim()) {
        output.textContent = 'Please enter a valid number';
        mostrarError(output);
        return;
    } else if (inputNumberConvert <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        mostrarError(output);
        return;
    } else if (inputNumberConvert >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        mostrarError(output);
        return;
    }
    convertInput(inputNumberConvert);
}

function convertInput(input) {
    output.textContent = '';
    const romanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    for (const key in romanos) {
        while (input >= romanos[key]) {
            output.textContent += key
            input -= romanos[key]
        }
    }
    mostrarCorrecto(output);
    return output.textContent;
}

function mostrarError(output) {
    output.classList.remove('correcto');
    output.classList.remove('oculto');
    output.classList.add('error');
    output.classList.add('visible');
}

function mostrarCorrecto(output) {
    output.classList.remove('error');
    output.classList.remove('oculto');
    output.classList.add('correcto');
    output.classList.add('visible');
}