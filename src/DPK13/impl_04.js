const fizzbuzz = (size) => {
  const result = [];
  // return [...Array(100)].map((_, idx) => { // for pre-defined size
  return [...Array(size)].map((_, idx) => {
    let item = idx+1;
    return item % 15 === 0 ? "FizzBuzz" : item % 3 === 0 ? "Fizz" : item % 5 === 0 ? "Buzz" : item;
  });
};

console.log(fizzbuzz(10));