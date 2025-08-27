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

const pattern_matcher = (country) => {
  const countries = ["Usa", "Brazil", "Spain", "Italy", "France", "Germany"];
  const languages = ["English", "Portuguese", "Spanish", "Italian", "French", "German"];
  const index = countries.indexOf(country);
  return languages[index];
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));
