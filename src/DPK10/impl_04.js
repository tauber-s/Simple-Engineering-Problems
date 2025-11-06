const reducefn = (numList, func, initial) => {
  let res = initial;
  let i = 0;
  while (i < numList.length) {
    res = func(res, numList[i]);
    i++;
  };
  return res;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));