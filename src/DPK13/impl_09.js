const fizzbuzz = (size) => {
  const result = [];
  let idx = 1;
  // while (idx <= 100) { // for pre-defined size
  while (idx <= size) {
  result.push(`${idx % 3 ? "" : "Fizz"}${idx % 5 ? "" : "Buzz"}` || idx);
  idx++;
  };
  return result;
};

console.log(fizzbuzz(10));