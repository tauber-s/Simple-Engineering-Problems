const replace = (text, token, nToken) => {
  return text.replaceAll(token, nToken);
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-"));