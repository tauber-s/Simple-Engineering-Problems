const revert = (numList) => {
  let reverted = [];
  let i = numList.length;
  
  while (i--) {
    reverted.push(numList[i]);
  }
  return reverted;
};

console.log(revert([1,2,3,4,5]));
