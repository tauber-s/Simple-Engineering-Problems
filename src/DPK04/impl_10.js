const Usa = () => { return "English"; };
const Brazil = () => { return "Portuguese"; };
const Spain = () => { return "Spanish"; };
const Italy = () => { return "Italian"; };
const France = () => { return "French"; };
const Germany = () => { return "German"; };

const pattern_matcher = (country) => {
  return eval(country + '()');
};

console.log(pattern_matcher("Usa"));
console.log(pattern_matcher("Brazil"));