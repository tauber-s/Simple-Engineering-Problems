/*
* Create a function that can tokenize a string based on a token.
* 
* tokenize("Hello,World,How,Are,You", ",") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello World How Are You", " ") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello-World-How-Are-You", "-") -> ["Hello", "World", "How", "Are", "You"]
* Can you refactor your code and do that without using any prebuild function like split?
*/

const tokenize = (str, delimiter) => {
  return str.match(new RegExp(`[^${delimiter}]+`, "g")) || [];
}

console.log(tokenize("Hello,World,How,Are,You", ","));
console.log(tokenize("Hello World How Are You", " "));
console.log(tokenize("Hello-World-How-Are-You", "-"));