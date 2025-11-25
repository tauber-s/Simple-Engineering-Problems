const bubble_sort = (numList) => {
  numList.forEach(() => {
    numList.forEach((value, idx) => {
      if (value > numList[idx +1])
        [numList[idx], numList[idx +1]] = [numList[idx +1], value];
    });
  });
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));