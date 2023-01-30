function solve(num,...commands) {

for (const command of commands) {
    switch (command) {
        case "chop":
            num /= 2;
        break;
        case "dice":
            num = Math.sqrt(num);
        break;
        case "spice":
            num++;
        break;
        case "bake":
            num *= 3
        break;
        case "fillet":
            num *= 0.80;
            break;
    }
    console.log(num);
}
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("-----------");
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

