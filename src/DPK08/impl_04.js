const mapfn = (numList, func) => {
  const res = [];
  let i = 0;
  do {
    res[i] = func(numList[i]);
    i++;
  } while (i < numList.length);
  
  return res;
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
