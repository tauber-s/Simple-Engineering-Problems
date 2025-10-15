const group_by = (numList, size) => {
  const sliced = [];
  let i = 0;
  while (i < numList.length) {
    const group = [];
    let count = 0;
    while (count < size && i < numList.length) {
      group.push(numList[i++]);
      count++;
    }
    sliced.push(group);
  }
  return sliced;
};
// eficiencia zero

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
