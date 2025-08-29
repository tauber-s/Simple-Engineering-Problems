const countries = [
  ["Usa", "English"],
  ["Brazil", "Portuguese"],
  ["Spain", "Spanish"],
  ["Italy", "Italian"],
  ["France", "French"],
  ["Germany", "German"],
];

const pattern_matcher = (country) => {
  let result;
  countries.forEach((value) => {
    result = value[0] === country ? value : result;
  });
  return result[1];
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));