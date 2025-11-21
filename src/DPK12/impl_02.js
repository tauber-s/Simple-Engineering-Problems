/*
DPK12 Sort
Create a function that can sort a list of numbers. The implementation should be a Bubble Sort(good to learn but terrible to use in production).

bubble_sort([5,4,3,2,1]) -> [1,2,3,4,5]
The sort function should recive a collection(list or array) and return a new sorted list.
*/

const bubble_sort = (numList) => {
  let i = 0;
  while (i < numList.length) {
    for (let j = 0; j < numList.length - 1; j++) {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
      }
    }
    i++;
  }
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));