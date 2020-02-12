// #PS-alpha-cipher exercise
//
// ## Instructions
// * Using vanilla JS, create a simple alpha-cipher encoder and decoder
// * Provide notes on your code, including how to run it in the Candidate Notes section below.
//
//     ## Rules
// * The cipher should use a simple substitution cipher: https://en.wikipedia.org/wiki/Substitution_cipher
//     * You must provide both a way to encode and decode a string.
// * The cipher should support single character, strings, and numbers as substitutions.
//
//     ## Example
// * Given the cipher key {a: 'b', b: 'c', d: e'...}
// * Encode string 'abc' should return 'bcd'
//     * Decode string 'bcd' should return 'abc'
//
//     ## Candidate Notes


/*
 * Alpha  cipher

 */


function doCrypt(isDecrypt) {
    if (document.getElementById("key").value.length == 0) {
        alert("Key is empty");
        return;
    }
    var key = filterKey(document.getElementById("key").value);
    if (key.length == 0) {
        alert("Key has no letters");
        return;
    }
    if (isDecrypt) {
        for (var i = 0; i < key.length; i++)
            key[i] = (26 - key[i]) % 26;
    }
    var textElem = document.getElementById("text");
    textElem.value = crypt(textElem.value, key);
}

function crypt(input, key) {
    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);
        if (isUppercase(c)) {
            output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
            j++;
        } else if (isLowercase(c)) {
            output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
            j++;
        } else {
            output += input.charAt(i);
        }
    }
    return output;
}


/*
 * Returns an array of numbers, each in the range [0, 26), representing the given key.
 * The key is case-insensitive, and non-letters are ignored.
 * Examples:
 * - filterKey("AAA") = [0, 0, 0].
 * - filterKey("abc") = [0, 1, 2].
 * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
 */
function filterKey(key) {
    var result = [];
    for (var i = 0; i < key.length; i++) {
        var c = key.charCodeAt(i);
        if (isLetter(c))
            result.push((c - 65) % 32);
    }
    return result;
}


// Tests whether the specified character code is a letter.
function isLetter(c) {
    return isUppercase(c) || isLowercase(c);
}

// Tests whether the specified character code is an uppercase letter.
function isUppercase(c) {
    return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

// Tests whether the specified character code is a lowercase letter.
function isLowercase(c) {
    return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}


