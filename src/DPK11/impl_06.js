const replace = (text, token, nToken) => {
  let result = "";
  let i = 0;
  while(i<text.length) {
    if (text.slice(i, i + token.length) === token) {
      result += nToken;
      i += token.length;
    } else {
      result += text[i];
      i++;
    }
  }
  return result;
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-")); 