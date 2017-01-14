function creatBase(x) {
    return function (y) {
        console.log(x + y)
    }
}

var addSix = creatBase(6);
addSix(10); // returns 16
addSix(21); // returns 27