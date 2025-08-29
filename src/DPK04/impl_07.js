const countries = "Usa:English,Brazil:Portuguese,Spain:Spanish,Italy:Italian,France:French,Germany:German";

const pattern_matcher = (country) => {
  const result = countries.match(new RegExp(country + ":([^,]+)"));
  return result ? result[1] : null;
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));