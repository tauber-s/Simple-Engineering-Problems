const bubble_sort = (numList) => {
  let i = 0;
  do {
    let j = 0;
    do {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
      }
      j++;
    } while (j < numList.length - 1)
    i++;
  } while (i < numList.length)
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));