const findSum = ([2, 4, 6]);
const sum = findSum.reduce(function(sum, number) {
    return sum + number;
}, 0);

Array.prototype.myReduce = function (callback, accumulator) {
    for (const i = 0; i < this.length; i++){
        const element = this[i];

        accumulator = callback(accumulator, element);
    }
   return accumulator;
    };


const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};


function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;

    return false;
}

isPalindrome("canal");

function isPalindrome(str) {
    var str = str.toLowerCase();
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;

    return false;
}
isPalindrome("Ana");

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
