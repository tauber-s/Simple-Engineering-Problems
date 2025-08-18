const revert = (numList) => {
  return numList.reduceRight((arrN, num) => {
    arrN.push(num);
    return arrN;
  },[]);
};

console.log(revert([1,2,3,4,5]));
