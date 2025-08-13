const revert = (word) => {
  let reverted = '';
  let i = word.length - 1;
  
  while(i>=0){
    reverted += word[i];
    i--;
  }
  return reverted;
};

console.log(revert('Hello'));