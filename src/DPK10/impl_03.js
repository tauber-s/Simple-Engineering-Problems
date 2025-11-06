const reducefn = (numList, func, initial) => {
  let res = initial;
  numList.forEach((value) => {
    res = func(res, value);
  });
  return res;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));