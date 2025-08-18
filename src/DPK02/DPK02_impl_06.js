const revert = (numList) => {
  return numList.reduce((arrN, num) => {
    arrN.unshift(num);
    return arrN;
  },[]);
};

console.log(revert([1,2,3,4,5]));
