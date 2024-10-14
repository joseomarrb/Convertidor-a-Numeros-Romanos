
//Variables
const inputNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

//Eventos
convertBtn.addEventListener("click", checkInput)


//Funciones
function checkInput() {
    const inputNumberConvert = parseInt(inputNumber.value)
    if (!inputNumber.value.trim()) {
        output.textContent = "Please enter a valid number";
        return;
    } else if (inputNumberConvert < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputNumberConvert >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
    convertInput(inputNumberConvert);
};

function convertInput(input) {
    output.textContent = "";
    while (input > 0) {
        if (input >= 1000) {
            output.textContent += "M";
            input -= 1000;
        } else if (input >= 900) {
            output.textContent += "CM";
            input -= 900;
        } else if (input >= 500) {
            output.textContent += "D";
            input -= 500;
        } else if (input >= 400) {
            output.textContent += "CD";
            input -= 400;
        } else if (input >= 100) {
            output.textContent += "C";
            input -= 100;
        } else if (input >= 90) {
            output.textContent += "XC";
            input -= 90;
        } else if (input >= 50) {
            output.textContent += "L";
            input -= 50;
        } else if (input >= 40) {
            output.textContent += "XL";
            input -= 40;
        } else if (input >= 10) {
            output.textContent += "X";
            input -= 10;
        } else if (input === 9) {
            output.textContent += "IX"
            input -= 9;
        } else if (input >= 5) {
            output.textContent += "V"
            input -= 5;
        } else if (input === 4) {
            output.textContent += "IV"
            input -= 4;
        } else if (input >= 1) {
            output.textContent += "I"
            input -= 1;
        }
    }

    return output.textContent;
};