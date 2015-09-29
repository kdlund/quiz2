'use strict';

function arraySum(arr) {
  var totalSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i]=="object") {
      arr[i] = arraySum(arr[i]);

    }
    totalSum  = totalSum + arr[i];
  }
  return totalSum;
}

module.exports = arraySum;
