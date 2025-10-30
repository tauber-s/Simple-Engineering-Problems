const mapfn = (numList, func, i = 0, acc = []) => {
  if (i >= numList.length) return acc;
  acc[i] = func(numList[i], i, numList);
  return mapfn(numList, func, i + 1, acc);
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
