class Filter {
  static filterfn(numList, func) {
    const res = [];
    numList.forEach((value) => {
      if(func(value)) res.push(value);
    });
    return res;
  }
}

console.log(Filter.filterfn([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0));