const fizzbuzz = (size) => {
  const result = [];
  // [...Array(100)].forEach((_, idx) => { // for pre-defined size
  [...Array(size)].forEach((_, idx) => {
    let item = idx+1;
	result.push(
      item % 15 === 0 ? "FizzBuzz" :
      item % 3 === 0 ? "Fizz" :
      item % 5 === 0 ? "Buzz" : item
    );
  })
  return result;
};

console.log(fizzbuzz(10));