const reducefn = (numList, func, initial) => {
  numList.map((_, i) => {
    initial = func(initial, numList[i]);
  });
  return initial;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));