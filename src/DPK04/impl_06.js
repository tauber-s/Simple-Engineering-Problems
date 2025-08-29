const countries = "Usa:English,Brazil:Portuguese,Spain:Spanish,Italy:Italian,France:French,Germany:German";

const pattern_matcher = (country) => {
  return countries.split(',').map(pair => pair.split(':')).find(([c]) => c === country)[1];
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));