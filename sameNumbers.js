function solve(num) {
    num = String(num)
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < num.length; i++) {
        let n = num[i];
        let n2 = num[i + 1];
        sum += Number(n)

        if (n2 !== undefined){
            if (n !== n2) {
            isEqual = false;
        }
    }
    }
    console.log(isEqual);
    console.log(sum);
}
solve(2222222);
solve(1234);