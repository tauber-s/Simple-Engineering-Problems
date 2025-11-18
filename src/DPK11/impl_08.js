const replace = (text, token, nToken) => {
  return text.split(token).map((t, i, arr) => (i === arr.length - 1 ? t : t + nToken)).join('');
}

console.log(replace("Hello,World,How,Are,You", ",", "-"));
console.log(replace("Hello,World,How,Are,You", ",World,", "-"));