function solve(km, place) {
    let messege = "";
    let speedLimit = 0;
    let status = "";
    let difference = 0;
    switch (place) {
        case "motorway":
            speedLimit = 130;
        break;
        case "interstate":
            speedLimit = 90;
        break;
        case "city":
            speedLimit = 50;
        break;
        case "residential":
            speedLimit = 20;
        break;       
    }
    difference = km - speedLimit;

    if (km <= speedLimit) {
        console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
    } else if (difference <= 20) {
        status = "speeding"
    } else if (difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }


    if (status) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');