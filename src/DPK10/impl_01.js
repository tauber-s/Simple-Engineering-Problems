/*
DPK10 Reduce
Create a function that can reduce a list to a single value.

reduce([1,2,3,4,5], (acc, x) => acc + x, 0) -> 15
The reduce function should recive a collection(list or array), a function that will be apply to each element of the collection and an initial value.

Now refactor the code and do not use any prebuild function.
*/

const reducefn = (numList, func, initial) => {
  let res = initial;
  for (let i = 0; i < numList.length; i++) {
    res = func(res, numList[i]);
  }
  return res;
};

console.log(reducefn([1,2,3,4,5], (acc, x) => acc + x, 0));