const reducefn = ([head, ...tail], func, initial) => 
  head === undefined ? initial : reducefn(tail, func, func(initial, head));

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));