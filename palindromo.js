// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

const getUserText = prompt("Insert a word or sentence: ").trim();
const userText = getUserText.split(/[^\w]+/).join('');
const userTextclean = userText.toLowerCase();
// console.log(userTextclean);
const userTextReversed = userTextclean.split('').reverse().join('');
// console.log(userTextReversed);

userTextclean === userTextReversed ? console.log("this is a palindromo") :
    console.log("This is not a palindromo");
