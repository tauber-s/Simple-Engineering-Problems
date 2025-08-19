const revert = (numList) => {
  let reverted = [];
  let i = numList.length - 1;
  
  do {
    reverted.push(numList[i]);
    i--;
  } while(i>=0);
  return reverted;
};

console.log(revert([1,2,3,4,5]));
