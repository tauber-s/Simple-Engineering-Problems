const revert = (numList) => {
  return numList.sort((a,b) => numList.indexOf(b) - numList.indexOf(a));
};

console.log(revert([1,2,3,4,5]));
