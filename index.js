// task 1   

let number1 = +prompt('Enter first number: ')
let operator = prompt('Enter operator ( either +, -, * or / ): ')
let number2 = +prompt('Enter second number: ')

if (operator == '+') {
    function creatingCalculator() {
        result = number1 + number2;
    }
}
else if (operator == '-') {
    function creatingCalculator() {
        result = number1 - number2;
    }
}
else if (operator == '*') {
    function creatingCalculator() {
        result = number1 * number2;
    }
}
else {
    function creatingCalculator() {
        result = number1 / number2
    }
}
creatingCalculator()
alert(`${number1} ${operator} ${number2} = ${result}`);

// task 2
let num = +prompt('общее кол-во')
let num1 = +prompt('найти из')

function findingPercent() {
    let answer = (num1 / num) * 100
    alert(answer);
}
findingPercent()