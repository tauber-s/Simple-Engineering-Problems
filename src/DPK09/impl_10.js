const filterfn = (numList, func) => {
  if (numList.length === 0) return [];
  const [head, ...tail] = numList;
  if (func(head)) return [head, ...filterfn(tail, func)];
  return filterfn(tail, func);
};

console.log(filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));