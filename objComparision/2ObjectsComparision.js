var obj1 = {
    a: '1',
    b: 'this is the letter b',
    c: {
        foo: 'what is a foo anyway',
        bar: [1, 2, 3, 4]
    }
};

var obj2 = {
    a: '1',
    b: 'this is the letter b',
    c: {
        foo: 'what is a foo anyway',
        bar: [1, 2, 3, 4]
    }
};

var result = "It is: ";

function isEquals(obj1, obj2) {
    var obj1Props = Object.getOwnPropertyNames(obj1),
        obj2Props = Object.getOwnPropertyNames(obj2);

    if (obj1Props.length !== obj2Props.length) {
        return false;
    }

    if (obj1Props !== obj2Props) {
        return false;
    }

    for (var prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
        if (obj1.hasOwnProperty !== obj2.hasOwnProperty) {
            return false;
        }
    }
    return true;
}

var x = isEquals(obj1, obj2);
console.log(result + x);



// Comparision using underscore
var yes = 'obj 1 and obj2 are the same according to _.isEqual',
    no = 'obj 1 and obj2 are NOT the same according to _.isEqual';  
_.isEqual(obj1, obj2) ? console.log(yes) : console.log(no);