function convertToUppercase(lowerCaseString) {
    return lowerCaseString.toUpperCase();
}

// console.log(convertToUppercase("apple"));

function reverseAString(string) {
    const slitArray = string.split("");

    const reverseArray = slitArray.reverse();

    const reverseString = reverseArray.join("");

    return reverseString;

    // return string.split("").reverse().join("")
}

// const number = [5, 3, 2, 4, 6, 0, 7, 8, 9];

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i];
// }

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i])

//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i] + " is even");
//     }
// }