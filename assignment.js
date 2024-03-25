function convertToUppercase(lowerCaseString) {
    return lowerCaseString.toUpperCase();
}

// console.log(convertToUppercase("apple"));


function reverseAString(string) {

    const slitArray = string.split("")

    const reverseArray = slitArray.reverse()

    const reverseString = reverseArray.join("")

    return reverseString

    // return string.split("").reverse().join("")

}

console.log(reverseAString("Heena"))