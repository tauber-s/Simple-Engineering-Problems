const countries = [
  ["Usa", "English"],
  ["Brazil", "Portuguese"],
  ["Spain", "Spanish"],
  ["Italy", "Italian"],
  ["France", "French"],
  ["Germany", "German"],
];

const pattern_matcher = (country, list=countries) => {
  const [head, ...tail] = list;
  return head[0] === country ? head[1] : pattern_matcher(country, tail);
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));