const reducefn = (numList, func, initial, i = 0) => {
  if (i >= numList.length) return initial;
  initial = func(initial, numList[i]);
  return reducefn(numList, func, initial, i + 1);
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));