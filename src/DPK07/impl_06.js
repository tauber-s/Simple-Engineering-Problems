const group_by = (numList, size) => {
  const sliced = [];
  let group = [];
  numList.forEach((num, i) => {
    group.push(num);
    if ((i + 1) % size === 0 || i === numList.length - 1) {
      sliced.push(group);
      group = [];
    }
  });
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
