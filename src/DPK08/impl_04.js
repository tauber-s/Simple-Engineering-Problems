const mapfn = (numList, func) => {
  const res = [];
  let i = 0;
  while (i < numList.length) {
    res[i] = func(numList[i]);
    i++;
  };
  return res;
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
