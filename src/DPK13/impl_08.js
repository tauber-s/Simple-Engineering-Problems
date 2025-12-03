const fizzbuzz = (size) => {
  const result = [];
  let idx = 1;
  while (idx <= size) {
    switch (true) {
      case idx % 15 === 0: result.push("FizzBuzz"); break;
      case idx % 3 === 0: result.push("Fizz"); break;
      case idx % 5 === 0: result.push("Buzz"); break;
      default: result.push(idx);
    }
    idx++;
  };
  return result;
};

console.log(fizzbuzz(10));