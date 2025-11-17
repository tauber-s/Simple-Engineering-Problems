const replace = (text, token, nToken) => {
  let result = "";
  let i = 0;
  while(i<text.length) {
    result += (text[i] === token) ? nToken : text[i];
    i++;
  }
  return result;
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));