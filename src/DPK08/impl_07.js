class Mapper {
  static mapfn(numList, func) {
    const res = [];
    numList.forEach((value, idx) => {
      res[idx] = func(value);
    });
    return res;
  }
}

console.log(Mapper.mapfn([1,2,3,4,5], (x) => x*2));