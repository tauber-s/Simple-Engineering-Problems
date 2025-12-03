const fizzbuzz = (size) => {
  const result = [];
  let idx = 1;
  while (idx <= size) {
  result.push(
	idx % 15 === 0 ? "FizzBuzz" :
	idx % 3 === 0 ? "Fizz" :
	idx % 5 === 0 ? "Buzz" : idx
  );
  idx++;
  };
  return result;
};

console.log(fizzbuzz(10));