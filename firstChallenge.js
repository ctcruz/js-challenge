// 1 - Non-Constructible Change

function nonConstructibleChange(arr) {
  const sumArr = [];
  let sumValue = 0;
  let minimumSum = 0;

  arr.sort((a, b) => a - b);

  arr.reduce((prev, current, i) => {
    sumValue = prev + current;
    sumArr.push(sumValue);
    return sumValue;
  });

  const penultimate = sumArr[sumArr.length - 2];
  const last = sumArr[sumArr.length - 1];

  if (penultimate + 1 < last) {
    minimumSum = penultimate + 1;
  } else {
    minimumSum = last + 1;
  }

  return minimumSum;
}

const testCase1 = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(testCase1));

const testCase2 = [1, 1, 1, 1, 1];
console.log(nonConstructibleChange(testCase2));

const testCase3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];
console.log(nonConstructibleChange(testCase3));

// 2 - Sorted Squared Array

// function sortedSquared(arr) {
//   const sumArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     sumArr.push(Math.pow(arr[i], 2));
//   }
//   sumArr.sort((a, b) => a - b);
//   return sumArr;
// }

// const testCase1 = [1, 2, 3, 5, 6, 8, 9];
// console.log(sortedSquared(testCase1));

// const testCase2 = [-2, -1];
// console.log(sortedSquared(testCase2));

// const testCase3 = [-10, -5, 0, 5, 10];
// console.log(sortedSquared(testCase3));
