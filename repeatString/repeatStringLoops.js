// for loop
function repeatStringNumTimes(str, num) {
    result = "";
    if (num < 0) { return result}
    for (var i = 0; i < num; i++) {
        return result = result + str;
    }
}

var repeat = repeatStringNumTimes('for loop. ', -3);
console.log(repeat);

// while loop
function repeatStringNumTimes2(str, num) {
    while (num > 0) {
        return str.repeat(num)
    } if (num < 0) {
        return "''";
    }
}
var repeat = repeatStringNumTimes2('while loop. ', 4);
console.log(repeat);

//do loop
function repeatStringNumTimes3(str, num) {
    if (num < 0) {
        return "''";
    } else {
        do {
            return str.repeat(num)
        } while (num > 0)
    }
}
var repeat = repeatStringNumTimes3('do loop. ', 5);
console.log(repeat);

