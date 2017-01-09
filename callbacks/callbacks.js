function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    var arr = [];

    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  

    for (var i = startIndex; i <= stopIndex; i++) {
        arr.push(i);
    }
    console.log(arr);

    for (var val in arr) {
        if (val % 5 === 0) {
            fiveCallback();
        } else if (val % 3 === 0) {
            threeCallback();
        } else if (val % 3 === 0 && val % 5 === 0) {
            threeCallback();
            fiveCallback();
        } else {
            continue;
        }
    }
}

function threeCallback() {
    console.log('sayThree')
}

function fiveCallback() {
    console.log('sayFive')
}

threeFive(10, 15, threeCallback, fiveCallback);