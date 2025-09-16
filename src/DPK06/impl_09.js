/*
* Create a function that can tokenize a string based on a token.
* 
* tokenize("Hello,World,How,Are,You", ",") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello World How Are You", " ") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello-World-How-Are-You", "-") -> ["Hello", "World", "How", "Are", "You"]
* Can you refactor your code and do that without using any prebuild function like split?
*/

const tokenize = (str, delimiter) => {
  let result = [], token = "", i = 0;
  while (i < str.length) {
    let s = str.charAt(i);
    if (s === delimiter) {
      result.push(token);
      token = "";
    } else {
      token += s;
    }
    i++;
  } 
  result.push(token)
  return result;
}

console.log(tokenize("Hello,World,How,Are,You", ","));
console.log(tokenize("Hello World How Are You", " "));
console.log(tokenize("Hello-World-How-Are-You", "-"));