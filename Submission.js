const findSum = (sum);
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


function isPalindrome(str) {
    var str = str.toLowerCase();
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;

    return false;
}


const largestPair = function(array) {
  var max=-Infinity;  
  for (var i=0;i<arr.length-1;i++){
      max = arr[i]*arr[i+1]>max ?arr[i]*arr[i+1]:max;
  }
  return max;
};

const removeParenth = function(str) {
   const openIndex = str.indexOf('(');
   const closeIndex = str.indexOf(')');
const originalString = str.slice(0, openIndex);
    const splicedString = str.slice(closeIndex + 1);
    return originalString + splicedString;
};


const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
