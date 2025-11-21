const bubble_sort = (numList) => {
  for (let i = 0; i < numList.length; i++) {
    for (let j = 0; j < numList.length - 1 - i; j++) {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
      }
    }
  }
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));