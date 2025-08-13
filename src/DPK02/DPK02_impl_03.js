const revert = (numList) => {
  return numList.map((_, i, arrN) => arrN[(arrN.length -1)-i]);
};

console.log(revert([1,2,3,4,5]));
