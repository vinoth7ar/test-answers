// #PS-palindrome-search exercise
//
// ## Instructions
// * Using vanilla JS, create a function that returns an array of all palindromes in order from longest to shortest length. If there no palindromes in the string, return an empty array.
// * Provide notes on your code, including how to run it in the Candidate Notes section below.
//
//     ## Rules
// * Palindromes can span multiple words
// * Palindrome must be at least 2 characters long
//
// ## Example
// * Given the string 'civic' or 'c ivic', the following array should be returned:
//     ['civic', 'ivi']
//
// ## Candidate Notes

//Get the input from user, here as we know the input its been hard-coded
var inputString = "civic";

//This function helps to determine if the given string is palindrome or not
function findPalindrome(string) {
    //Reverse the given string and store it to a new variable
    var newString = string.split('').reverse().join('');

    //If the input string and reversed string matchers then return true [which denotes the input is palindrome]
    if (string === newString) {
        return true;
        //    Else return false
    } else {
        return false;
    }
}


//Loop - helps to split the input string and pass the set of characters one by one
while (0 < inputString.length) {
    var testString = '';
    for (var i = 0; i < inputString.length; i++) {

        //Get the input string character one by one and assign in to local test string
        testString += inputString[i];

        //making sure string is over 2 chars before finding the result
        if (testString.length > 1)
            if (findPalindrome(testString)) {

                //Based on the return from the find Palindrome method op gets printed
                console.log("Palindrome Found: " + testString);
            }
    }
    inputString = inputString.slice(1);
}
