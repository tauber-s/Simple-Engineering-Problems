const group_by = (numList, size, idx = 0) => {
  if (idx >= numList.length) return [];
  const group = [];
  for (let i = 0; i < size && idx + i < numList.length; i++) {
    group.push(numList[idx + i]);
  }
  return [group].concat(group_by(numList, size, idx + size));
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
