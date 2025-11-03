const mapfn = (numList, func) => {
  return Array.from(numList, func);
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
