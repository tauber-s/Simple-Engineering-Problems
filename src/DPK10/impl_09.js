const reducefn = (numList, func, initial) => {
  if (numList.length === 0) return initial;
  const [head, ...tail] = numList;
  initial = func(initial, head);
  return reducefn(tail, func, initial);
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));