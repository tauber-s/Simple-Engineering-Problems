const revert = (numList) => {
  const reverted = [];
  numList.forEach(n => reverted.unshift(n));
  return reverted;
}

console.log(revert([1,2,3,4,5]));
