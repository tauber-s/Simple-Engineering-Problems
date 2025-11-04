const filterfn = (numList, func) => {
  const res = [];
  numList.map((_, i) => {
    if(func(numList[i])) res.push(numList[i]);
  });
  return res;
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));