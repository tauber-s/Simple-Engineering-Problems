const filterfn = (numList, func, i = 0, acc = []) => {
  if (i >= numList.length) return acc;
  if(func(numList[i])) acc.push(numList[i]);
  return filterfn(numList, func, i + 1, acc);
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));