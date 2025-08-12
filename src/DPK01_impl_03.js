
/*
* DPK01 Revert String
* Create a function that can revert a string.
* revert("Hello") -> "olleH"
*/

const revert = (word) => {
  return [...word].reverse().join('');
};

console.log(revert('Hello'));
