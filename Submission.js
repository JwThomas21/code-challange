const findSum = function(array) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((sum, num) => sum = num, 0);
}


const findFrequency = function(array) {
  if (array.length === 0) {
      return {most: undefined, least: undefined};
}
    const frequencyMap = {0};
    let most = array[0];
    let least = array[0];

    array.forEach((arr) => {
        frequencyMap[arr] = (frequencyMap[arr] || 0) + 1; 
            if (frequencyMap[arr] < frequencyMap[least]) {
                most = arr;
            }
        if (frequencyMap{arr} > frequencyMap[least]) {
        least = arr;
    }
});
return {most: most, least: least};
            


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
