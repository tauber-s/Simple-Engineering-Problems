const bubble_sort = (numList) => {
  while (true) {
    let isSwapped = false;
    for (let j = 0; j < numList.length - 1; j++) {
      if (numList[j] > numList[j + 1]) {
        [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));