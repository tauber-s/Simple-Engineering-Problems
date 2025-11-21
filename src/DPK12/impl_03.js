const bubble_sort = (numList) => {
  let i = 0;
  while (i < numList.length) {
    let j = 0;
    while (j < numList.length - 1) {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
      }
      j++;
    }
    i++;
  }
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));