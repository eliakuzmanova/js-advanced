function solve(a,b,c) {
    let sum = a.length + b.length + c.length
    console.log(`${sum}\n${Math.floor(sum / 3)}`);
}
solve('chocolate', 'ice cream', 'cake')