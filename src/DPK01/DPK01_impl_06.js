/*
* DPK01 Revert String
* Create a function that can revert a string.
* revert("Hello") -> "olleH"
*/

const revert = (word) => {
  let reverted = '';
  
  for(let i=1; i<=word.length; i++){
    reverted += word.at(-i);
  };
  return reverted;
};

console.log(revert('Hello'));
