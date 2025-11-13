const replace = (text, token, nToken) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += (text[i] === token) ? nToken : text[i];
  }
  return result;
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));