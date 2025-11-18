const replace = (text, token, nToken) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text.startsWith(token, i)) {
      result += nToken;
      i += token.length - 1;
    } else {
      result += text[i];
    }
  }
  return result;
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-")); 