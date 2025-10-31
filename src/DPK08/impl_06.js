const mapfn = (numList, func) => {
  const res = new Array(numList.length);
  for (let i = 0; i < numList.length; i++) {
    res[i] = func(numList[i]);
  }
  return res;
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
