/*
DPK11 Replace
Create a function that can replace a given token in a string.

replace("Hello,World,How,Are,You", ",", "-") -> "Hello-World-How-Are-You"
The replace function should recive a string, a token to be replaced and a new token. Refactor the code to not only replace one token but a string that you can recive by parameter.

replace("Hello,World,How,Are,You", ",World,", "-") -> "Hello-How,Are,You"
Now refactor the code and do not use any prebuild function.
*/

const replace = (text, token, nToken) => {
  return text.split(token).join(nToken);
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-"));