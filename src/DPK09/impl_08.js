const filterfn = (numList, func) => {
  const res = [];
  for (const num of numList) {
    if(func(num)) res.push(num);
  };
  return res;
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));