const group_by = (numList, size) => {
  const sliced = [[]];
  let count = 0;
  for (const num of numList) {
    const group = sliced[sliced.length - 1];
    group.push(num);
    count++;
    if (count === size && numList.indexOf(num) !== numList.length - 1) {
      sliced.push([]);
      count = 0;
    }
  }
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
