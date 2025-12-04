const fizzbuzz = (size) => {
  const result = [];
  // for (let i=1; i<=100; i++){ // for pre-defined size
  for (let i=1; i<=size; i++){
	result.push(`${i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || i);
  }
  return result;
};

console.log(fizzbuzz(10));