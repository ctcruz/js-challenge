// 2 - Sorted Squared Array

function sortedSquared(arr) {
  const sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    sumArr.push(Math.pow(arr[i], 2));
  }
  sumArr.sort((a, b) => a - b);
  return sumArr;
}

const testCase1 = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquared(testCase1));

const testCase2 = [-2, -1];
console.log(sortedSquared(testCase2));

const testCase3 = [-10, -5, 0, 5, 10];
console.log(sortedSquared(testCase3));
