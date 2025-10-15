const group_by = (numList, size) => {
  const sliced = [];
  let group = [];
  for (const num of numList) {
    group.push(num);
    if (group.length === size) {
      sliced.push(group);
      group = [];
    }
  }
  if (group.length) sliced.push(group);
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
