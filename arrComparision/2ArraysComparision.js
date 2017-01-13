var arr1 = ['Eyad', 'Khamis', 42, 'Syrian'],
    arr2 = ['Eyad', 'Khamis', "42", 'Syrian'];

function areSame(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

var resultSame = areSame(arr1, arr2);
if (resultSame) {
    console.log(resultSame + ': They are the same');
} else {
    console.log(resultSame + ': They are not the same')
}

// Check if identical
function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

var resultIdentical = arraysAreIdentical(arr1, arr2);
if (resultIdentical) {
    console.log(resultIdentical + ": They are identical")
} else {
    console.log(resultIdentical + ": They are NOT identical")
}

//Conditional (ternary) Operator
var message = areSame(arr1, arr2) ? "It is true 'ternary'" : "It is false 'ternary'";
console.log(message);