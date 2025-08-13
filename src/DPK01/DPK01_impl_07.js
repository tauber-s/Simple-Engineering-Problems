const revert = (word) => {
  let reverted = word.split('');
  
  reverted = reverted.map((_, i, arrW) => arrW[(arrW.length -1) -i]);
  return reverted.join('');
};

console.log(revert('Hello'));
