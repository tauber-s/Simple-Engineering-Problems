/*
* DPK02 Revert a List
* Create a function that can revert a list.
* revert([1,2,3,4,5]) -> [5,4,3,2,1]
*/

const revert = (numList) => {
  let reverted = [];
  for(let i=numList.length; i>0; i--){
    reverted.push(numList[i-1]);
  };
  return reverted;
};

console.log(revert([1,2,3,4,5]));
