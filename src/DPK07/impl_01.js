/*
Create a function that can group a list of numbers by a given number.

group_by([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]
Please make sure the same function works with strings as well.

group_by(["a","b","c","d","e","f","g","h","i","j"], 3) -> [["a","b","c"], ["d","e","f"], ["g","h","i"], ["j"]]
Can you refactor the code and create your own group by function, do not use any prebuild function.
*/

const group_by = (numList, size) => {
  const sliced = [];
  for (let i = 0; i < numList.length; i += size){
    sliced.push(numList.slice(i,i+size));
  };
  return sliced;
};

console.log(group_by([1,2,3,4,5,6,7,8,9,10], 3));