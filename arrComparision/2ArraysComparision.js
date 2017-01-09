var arr1 = ['Eyad', 'Khamis', 42, 'Syrian'],
    arr2 = ['Eyad', 'Khamis', 42, 'Syrian'];

function areSame(a, b) {

    if (a.length !== b.length) {
        return false;
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

//Conditional (ternary) Operator
var message = areSame(arr1, arr2) ? "It is true" : "It is false";
console.log(message);



var result = areSame(arr1, arr2);
if (result) {
    console.log(result + ': They are the same');
} console.log(result + ': They are not the same')




//Another option
// Check if identical
function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false + ": Arrays dosn't have the same length";
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false + ": arrays' items/vlaues are not identical";
        }
    }
    return true + ": arrays are identical";
}
console.log(arraysAreIdentical(arr1, arr2))


// Check if equal
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false + ": Arrays dosn't have the same length";
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false + ": arrays' items/vlaues are not equal";
        }
    }
    return true + ": arrays are equal";
}
console.log(arraysAreEqual(arr1, arr2))