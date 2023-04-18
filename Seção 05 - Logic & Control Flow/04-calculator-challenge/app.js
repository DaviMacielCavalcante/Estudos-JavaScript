function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return console.log(num1 + num2);
        case '-':
            return console.log(num1 - num2);
        case '*':
            return console.log(num1 * num2);
        case '/':
            return console.log(num1 / num2);
        default:
            return console.log('Operador inválido');        
    }
}

calculator(5, 3, '');