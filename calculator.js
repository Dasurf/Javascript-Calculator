function myCalculator() {
    const operator = prompt('Enter arithmetic operation to execute(either +, -, * or /): ');
    const firstValue = parseFloat(prompt('Enter the first value: '));
    const secondValue = parseFloat(prompt('Enter the second value: '));
    let result;

    if (operator == '+') {
        result = firstValue + secondValue;
        alert('Answer = ' + result)
    }

    else if (operator == '-') {
        result = firstValue - secondValue;
        alert('Answer = ' + result)
    }

    else if (operator == '*') {
        result = firstValue * secondValue;
        alert('Answer = ' + result)
    }

    else if (operator == '/') {
        result = firstValue / secondValue;
        alert('Answer = ' + result)
    }

    else alert('Oops! Operation not valid')
     return
}

