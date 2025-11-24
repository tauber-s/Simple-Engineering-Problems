const bubble_sort = (numList) => {
  let i = 0;
  do {
    for (let j = 0; j < numList.length - 1; j++) {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
      }
    }
    i++;
  } while (i < numList.length)
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));