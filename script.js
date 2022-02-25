// Operators
const clear = document.querySelector('#clear');
const reverse = document.querySelector('#reverse');
const porcentage = document.querySelector('#porcentage');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const plus = document.querySelector('#plus');
const subtract = document.querySelector('#subtract');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');

// Numbers
const numbers = document.querySelectorAll('.num');

// Display
const display = document.querySelector('#display');

// Variables
var valor = display.value
var tamanho = valor.length


const GetNum = numbers.forEach(element => {
    element.addEventListener('click', e => {
        if (tamanho < 19) {
            if (display.value == 'undefined') {
                display.value = ''
                display.value += e.target.innerText
            }
            else display.value += e.target.innerText;
        }
    })
});

clear.addEventListener('click', () => {
    display.value = '';
})

reverse.addEventListener('click', () => {
    display.value *= -1;
})

porcentage.addEventListener('click', () => {
    display.value /= 100;
})

divide.addEventListener('click', () => {
    if(valor[tamanho - 1] != '/') display.value += '/';
})

multiply.addEventListener('click', () => {
    if(valor[tamanho - 1] != '*') display.value += '*';
})

plus.addEventListener('click', () => {
    if(valor[tamanho - 1] != '+') display.value += '+';
})

subtract.addEventListener('click', () => {
    if(valor[tamanho - 1] != '-') display.value += '-';
})

dot.addEventListener('click', () => {
    valor += '.';
})

equal.addEventListener('click', () => {
    if (
        valor[tamanho] != '/' &&
        valor[tamanho] != '*' &&
        valor[tamanho] != '+' &&
        valor[tamanho] != '-'
    ) {
        display.value = eval(display.value);
    }
})