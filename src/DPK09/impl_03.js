const filterfn = (numList, func) => {
  const res = [];
  let i = 0;
  while (i < numList.length) {
    if(func(numList[i])) res.push(numList[i]);
    i++;
  };
  return res;
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));