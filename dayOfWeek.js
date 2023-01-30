function solve(day) {
    let command;
if (day == "Monday") {
    command = 1;
} else if (day == "Tuesday") {
    command = 2;
} else if (day == "Wednesday") {
    command = 3;
} else if (day == "Thursday") {
    command = 4;
} else if (day == "Friday") {
    command = 5;
} else if (day == "Saturday") {
    command = 6;
} else if (day == "Sunday") {
    command = 7;
} else {
    command = "error";
}
console.log(command);
}
solve('Monday');
solve('Friday');
solve('Invalid');