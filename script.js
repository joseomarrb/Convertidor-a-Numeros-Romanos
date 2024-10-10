/**
 * Historias de usuario:

Debe tener un elemento de entrada con un id de "número"

Debe tener un elemento de botón con un id de "convert-btn"

Debe tener un elemento div, span o p con un id de salida

Cuando hace clic en el elemento #convert-btn sin ingresar un
valor en el elemento #number, el elemento #output debe contener
el texto "Ingrese un número válido".

Cuando el elemento #number contiene el número -1 y se hace clic
en el elemento #convert-btn, el elemento #output debe contener
el texto "Ingrese un número mayor o igual a 1".

Cuando el elemento #number contiene el número 4000 o mayor y se
hace clic en el elemento #convert-btn, el elemento #output debe
contener el texto "Ingrese un número menor o igual a 3999".

Cuando el elemento #number contiene el número 9 y se hace clic
en el elemento #convert-btn, el elemento #output debe contener
el texto "IX".

Cuando el elemento #number contiene el número 16 y se hace clic
en el elemento #convert-btn, el elemento #output debe contener el texto "XVI".

Cuando el elemento #number contiene el número 649 y se hace clic en el elemento
#convert-btn, el elemento #output debe contener el texto "DCXLIX".

Cuando el elemento #number contiene el número 1023 y se hace clic en el elemento
#convert-btn, el elemento #output debe contener el texto "MXXIII".

Cuando el elemento #number contiene el número 3999 y se hace clic en el elemento
#convert-btn, el elemento #output debe contener el texto "MMMCMXCIX".

Cumpla con las historias de usuario y apruebe todas las pruebas a continuación
para completar este proyecto. Déle su propio estilo personal. ¡Feliz codificación!
 */


//Variables
const inputNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

//Eventos
convertBtn.addEventListener("click", convertir)


//Funciones
function convertir() {
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
}