function solve(a,b,op) {
    let sum = 0;
    switch(op) {
        case "+":
            sum = a + b;
            break;
        case "-":
            sum = a - b;
            break;
        case "*":
            sum = a * b;
            break;
        case "/":
            sum = a / b;
            break;
        case "%":
            sum = a % b;
            break;
        case "**":
            sum = a ** b;
            break;
    }
    console.log(sum);
}
solve(3, 5.5, '*');
solve(5, 6, '+');
solve(7,5,"-");

//'+', '-', '*', '/', '%', '**'.