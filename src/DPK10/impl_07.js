class Reduce {
  static reducefn(numList, func, initial) {
    numList.forEach((value) => {
      initial = func(initial, value);
    });
    return initial;
  }
}

console.log(Reduce.reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));