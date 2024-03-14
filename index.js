// const let var

const name = "Sudarshan";

var address = "Nepal";

function addTwoNumbers(a = 2, b = 0) {
    //  const a = 10;
    //  const b = 15;

    console.log(a, b);

    const sum = a + b;

    //recursion
    addTwoNumbers();

    return sum;

    // console.log(sum);
}

// console.log(sum);

//call this function
addTwoNumbers();

const addedNumber = addTwoNumbers(10, 15);

console.log(addedNumber);

function subtractTwoNumber() {}