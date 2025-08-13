const revert = (word) => {
  let reverted = '';
  let i = word.length - 1;
  
  do {
    reverted += word[i];
    i--;
  } while(i>=0);
  return reverted;
};

console.log(revert('Hello'));