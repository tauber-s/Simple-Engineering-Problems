const filterfn = (numList, func) => {
  const res = [];
  let i = 0;
  do {
    if(func(numList[i])) res.push(numList[i]);
    i++;
  } while (i < numList.length);
  return res;
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));