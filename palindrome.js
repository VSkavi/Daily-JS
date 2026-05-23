let word = "racecar";
let reversedWord = word.split("").reverse().join("");
//console.log(word === reversedWord); --> output true or false
if (word === reversedWord) {
    console.log(word + " is a palindrome.");
}else {
    console.log(word + " is not a palindrome.");
}