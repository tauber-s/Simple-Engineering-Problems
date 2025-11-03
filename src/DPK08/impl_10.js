const mapfn = (numList, func) => {
  if (numList.length === 0) return [];
  const [head, ...tail] = numList;
  return [func(head), ...mapfn(tail, func)];
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
