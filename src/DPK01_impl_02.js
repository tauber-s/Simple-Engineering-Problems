/*
* DPK01 Revert String
* Create a function that can revert a string.
* revert("Hello") -> "olleH"
*/

const revert = (word) => {
  let reversed = word.split('').reverse();
  return reversed.join('');
};

console.log(revert('Hello'));
