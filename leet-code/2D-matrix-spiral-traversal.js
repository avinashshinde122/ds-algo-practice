/*
  arr [
    [1,2,3,4],
    [5,6,7,8],
    [11,12,13,14],
    [21,22,23,24],
    [31,32,33,34]
  ]


nXm arr
*/

// 00->01->02...->0n->1n->2n->3n->....mn->
// m(n-1)-> m(n-2)->...m0->(m-1)0->(m-2)0->...10->
// 11.....

const spiralTravell = (arr) => {
  let rowSize = arr.length; // 5
  let colSize = arr[0].length; // 4
  const output = [];
  let colStart = 0;
  let rowStart = 0;

  while (rowSize > rowStart && colSize > colStart) {
    for (let i = colStart; i < colSize; i++) {
      output.push(arr[rowStart][i]);
    }
    for (let i = rowStart + 1; i < rowSize; i++) {
      output.push(arr[i][colSize - 1]);
    }
    for (let i = colSize - 1 - 1; i > colStart - 1; i--) {
      output.push(arr[rowSize - 1][i]);
    }
    for (let i = rowSize - 1 - 1; i > rowStart; i--) {
      output.push(arr[i][colStart]);
    }

    colStart++;
    rowStart++;
    rowSize--;
    colSize--;
  }

  return output;
};

const arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
];

console.log(spiralTravell(arr1));
