const group_by = (numList, size) => {
  const sliced = [];
  numList.map((_, i) => {
    if (i % size === 0) {
      const sizeGroup = [];
      for (let j = i; j < i + size && j < numList.length; j++) 
        sizeGroup.push(numList[j]);
      sliced.push(sizeGroup);
    }
  });
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
