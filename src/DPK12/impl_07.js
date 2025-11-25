const bubble_sort = (numList) => {
  numList.forEach(() => {
    for (let i = 0; i < numList.length; i++) {
      const right = numList[i];
      const left = numList[i +1];
      if (right > left) {
        numList[i] = left;
        numList[i +1] = right;
      };
    };
  });
  return numList;
};

console.log(bubble_sort([5,4,3,2,1]));