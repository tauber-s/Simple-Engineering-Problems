const countries = "Usa,Brazil,Spain,Italy,France,Germany".split(",");
const languages = "English,Portuguese,Spanish,Italian,French,German".split(",");

const pattern_matcher = (country) => {
  return languages[countries.indexOf(country)];
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));