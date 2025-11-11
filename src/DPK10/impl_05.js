const reducefn = (numList, func, initial) => {
  let res = initial;
  let i = 0;
  do {
    res = func(res, numList[i]);
    i++;
  } while (i < numList.length);
  return res;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));