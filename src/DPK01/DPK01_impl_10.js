const revert = (word) => {
  let reverted = '';
  let arrW = word.split('');
  
  while(arrW.length){
    reverted += arrW.pop();
  }
  return reverted;
};

console.log(revert('Hello'));