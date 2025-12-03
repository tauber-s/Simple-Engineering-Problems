const fizzbuzz = (size, idx = 1, arr = []) => {
  // if (idx > 100) return arr; // for pre-defined size
  if (idx > size) return arr;
  arr.push(
    idx % 15 === 0 ? "FizzBuzz" :
    idx % 3 === 0 ? "Fizz" :
    idx % 5 === 0 ? "Buzz" : idx
  );
  return fizzbuzz(size, idx + 1, arr);
};

console.log(fizzbuzz(10));