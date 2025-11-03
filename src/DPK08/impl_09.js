const mapfn = (numList, func, i = 0) => {
  if (i >= numList.length) return [];
  return [func(numList[i])].concat(mapfn(numList, func, i + 1));
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
