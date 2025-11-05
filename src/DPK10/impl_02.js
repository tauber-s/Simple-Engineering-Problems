const reducefn = (numList, func, initial) => {
  let res = initial;
  for (const num of numList) {
    res = func(res, num);
  };
  return res;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));