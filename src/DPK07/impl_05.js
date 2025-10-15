const group_by = (numList, size) => {
  const sliced = [];
  let count = 0;
  while (count < numList.length) {
    const group = [];
    for (let i = 0; i < size && count + i < numList.length; i++) {
      group.push(numList[count + i]);
    }
    sliced.push(group);
    count += size;
  }
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
