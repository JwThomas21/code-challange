const findSum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
    sum += array[i];
}
return sum;
}


const findFrequency = function (array) {
const map = {};
     let most = array[0];
     let least = array[0];
array.forEach((arr) => {
map[arr] = (map[arr] || 0) + 1;
 if (map[arr] > map[most]) {
 mostFrequent = arr;
 }
    if (map[arr] < map[least]) {
leastFrequent = arr;
 }
});
    return { most: most, least: least };
};

                
const isPalindrome = function(str) {
var str = str.toLowerCase();
var reversed = str.split("").reverse().join("");
     if (reversed === str) return true;

 return false;
};

const largestPair = function(array) {
  var max=-Infinity;  
  for (var i=0;i<array.length-1;i++){
      max = array[i]*array[i+1]>max ?array[i]*array[i+1]:max;
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
 let scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
    let score = 0
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        const n = str.charCodeAt(i) - 65;
       if (n < 0 || n > 25) continue;
        score += scores[n];
    }
    return score;
};
