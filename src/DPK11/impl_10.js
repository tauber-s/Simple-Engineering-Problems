const replace = (text, token, nToken) => {
  return text.split(token).reduce((acc, t, i, arr) => {
    if (i === arr.length - 1) return acc + t;
    return acc + t + nToken;
  }, "");
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-")); 