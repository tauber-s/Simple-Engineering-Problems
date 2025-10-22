/*
Create a function that can map a function execution to each element of a list, return a new list.

map([1,2,3,4,5], (x) => x * 2) -> [2,4,6,8,10]
The map function should recive a collection(list or array) and a function that will be apply to each element of the collection.

Now refactor the code and do not use any prebuild function.
*/

const mapfn = (numList, func) => {
  return numList.map(func);
};

console.log(mapfn([1,2,3,4,5], (x) => x*2));
