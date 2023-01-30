function solve(input) {
let sum = 0;
let inverse = 0;
let concat = "";

for (const num of input) {
    sum += num;
    inverse += 1 / num;
    concat += String(num);
}
console.log(`${sum}\n${inverse}\n${concat}`);
}
solve([2, 4, 8, 16]);