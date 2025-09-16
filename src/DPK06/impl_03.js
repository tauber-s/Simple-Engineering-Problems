/*
* Create a function that can tokenize a string based on a token.
* 
* tokenize("Hello,World,How,Are,You", ",") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello World How Are You", " ") -> ["Hello", "World", "How", "Are", "You"]
* tokenize("Hello-World-How-Are-You", "-") -> ["Hello", "World", "How", "Are", "You"]
* Can you refactor your code and do that without using any prebuild function like split?
*/

const tokenize = (str, delimiter) => {
    let result = [], token = "";
    for (let s of str){
        if(s === delimiter){
            result.push(token);
            token = "";
        } else {
            token += s
        }
    }
    result.push(token)
    return result;
}

console.log(tokenize("Hello,World,How,Are,You", ","));
console.log(tokenize("Hello World How Are You", " "));
console.log(tokenize("Hello-World-How-Are-You", "-"));