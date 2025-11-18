const replace = (text, token, nToken) => {
  let result = "";
  let i = 0;
  do {
    if (text.slice(i, i + token.length) === token) {
      result += nToken;
      i += token.length;
    } else {
      result += text[i];
      i++;
    }
  } while(i<text.length);
  return result;
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-"));