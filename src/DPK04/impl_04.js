const countries = [
  ["Usa", "English"],
  ["Brazil", "Portuguese"],
  ["Spain", "Spanish"],
  ["Italy", "Italian"],
  ["France", "French"],
  ["Germany", "German"],
];

const pattern_matcher = (country) => {
  return countries.reduce((acc, [c, lang]) => c === country ? lang : acc, null);
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));