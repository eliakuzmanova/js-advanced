function solve(year, month, day) {

    let date = new Date(year, month+ 1,day-1);
    let prDay = date.getDate();
    let wantedMonth = date.getMonth();
    let wantedYear = date.getFullYear();
    console.log(`${wantedYear}-${wantedMonth-1}-${prDay}`);
}
solve(2016, 10, 1)