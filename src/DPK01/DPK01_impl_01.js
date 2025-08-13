/*
* DPK01 Revert String
* Create a function that can revert a string.
* revert("Hello") -> "olleH"
*/

const revert = (word) => {
  let reverted = [];
  for(let i=word.length; i>0; i--){
    reverted.push(word[i-1]);
  };
  return reverted.join('');
};

console.log(revert('Hello'));
