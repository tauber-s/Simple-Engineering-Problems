const group_by = (numList, size) => {
  return numList.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / size);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));
