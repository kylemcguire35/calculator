const display = document.querySelector('#display');

const btnAC = document.querySelector('#ac');
const btnDel = document.querySelector('#del');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('#equals');
const btnDot = document.querySelector('#dot');

let numbers = "";
let allowNumbers = true;
let allowDot = true;

//Click a Number Button
btnNumbers.forEach(function(button) {
    button.addEventListener('click', function(e) {

        //Prevent too large of a number
        if (numbers.length < 27 & allowNumbers) {

            //Add number to end of numbers string
            numbers += button.textContent;
        };
        
    display.textContent = numbers;
    });
}); 

//Click Decimal Button
btnDot.addEventListener('click', function() {
  if (allowDot) {
  
    numbers += btnDot.textContent;
    display.textContent = numbers;
    allowDot = false;  
  }


});

//Click an Operator Button
btnOperators.forEach(function(button) {
    button.addEventListener('click', function() {

        //Do not allow if blank or includes an operator
        if (numbers === "" || (numbers.includes('*') || numbers.includes('/') || numbers.includes('+') || numbers.includes('-'))) {

        //Otherwise, allow and display on the screen
        } else {
            numbers += button.textContent;
            display.textContent = numbers;
            allowNumbers = true;
            allowDot = true;
        }


    });
}); 

//Click Equals Button
btnEquals.addEventListener('click', function() {
  numbers = String(eval(numbers));
  display.textContent = numbers;
  allowNumbers = false;
  allowDot = false;
});

//Click AC Button
btnAC.addEventListener('click', function() {
    numbers = "";
    display.textContent = numbers;
    allowNumbers = true;
    allowDot = true;
});

//Click Delete Button
btnDel.addEventListener('click', function() {

    numbers = numbers.slice(0, -1);
    display.textContent = numbers;
});
