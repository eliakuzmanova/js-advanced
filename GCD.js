function solve(a,b) {
   
   let total = 0;
    for (let index = 0; index <= Math.min(a,b); index++) {
    
        if (a % index == 0 && b % index == 0) {
            total = index;
        }
    }
    console.log(total);

}
solve(15, 5);
solve(2154, 458);
