function TimeToWalk(arg1, arg2, arg3) {
    let stepsNumber = Number(arg1);
    let stepsMetersHr = Number(arg2);
    let studentSpeed = Number(arg3);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    //console.log(distanceMeters);
    //console.log(speedMetersSec);
    //console.log(time);
    //console.log(rest);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);


}
TimeToWalk(4000, 0.60, 5);
//Every 500 meters the student rests and takes a 1-minute break
//`hours:minutes:seconds`.  00:32:48