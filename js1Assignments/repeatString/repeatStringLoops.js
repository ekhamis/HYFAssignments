// for loop
function repeatStringNumTimes(str, num) {
    var result = "";
    if (num <= 0) {
        return result;
    }
    for (var i = 0; i < num; i++) {
        result = result + str;
    }
    return result;
}

var repeat = repeatStringNumTimes('for loop. ', 3);
console.log(repeat);


// while loop
function repeatStringNumTimes2(str, num) {
    var result = "";
    while (num > 0) {
        result = result + str;
        num--;
    } return result
}
var repeat2 = repeatStringNumTimes2('while loop. ', 4);
console.log(repeat2);

//do loop

function repeatStringNumTimes3(str, num) {    
    var result = "";
    do {
        if (num > 0) {
            result += str;
            num--;
        } else return result;

    } while (num > 0);
    return result;
}
var repeat3 = repeatStringNumTimes3('do loop. ', 3);
console.log(repeat3);

// do loop 2 recommended by Jim
function repeatStringNumTimes3(str, num) {
    if (num <= 0) {
        return ""
    }

    var result = "";
    do {
        result += str;
        num--;
    } while (num > 0);
    return result;
}
var repeat3 = repeatStringNumTimes3('do loop. ', 3);
console.log(repeat3);