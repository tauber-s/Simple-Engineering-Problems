/**
 * Given the following countries and languages:
 * Usa -> English
 * Brazil -> Portuguese
 * Spain -> Spanish
 * Italy -> Italian
 * France -> French
 * Germany -> German

 * Create a function that can return the language for a given country.
 * You cannot use a hashmap or dictionary.

 * pattern_matcher("Usa") -> "English"

 * Refactor the code, can you do that without using IF statements?
 * pattern_matcher("Usa") -> "English"
*/

const countries = new Map([
  ["Usa", "English"],
  ["Brazil", "Portuguese"],
  ["Spain", "Spanish"],
  ["Italy", "Italian"],
  ["France", "French"],
  ["Germany", "German"],
]);

const pattern_matcher = (country) => {
  return countries.get(country);
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));
