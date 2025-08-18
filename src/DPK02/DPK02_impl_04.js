/*
* DPK02 Revert a List
* Create a function that can revert a list.
* revert([1,2,3,4,5]) -> [5,4,3,2,1]
*/

const revert = (numList) => {
  let reverted = [];
  for(let i=0; i<numList.length; i++){
    reverted.unshift(numList[i]);
  };
  return reverted;
};

console.log(revert([1,2,3,4,5]));
