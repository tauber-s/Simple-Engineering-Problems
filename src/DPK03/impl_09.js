const idToName = new Map([[1, "John"]]);
const nameToEmail = new Map([["John", "john@john.john.com"]]);
const emailToName = new Map([["john@john.john.com", "John"]]);

const lookup = (query) => {
  if (idToName.has(query)) return idToName.get(query);
  if (nameToEmail.has(query)) return nameToEmail.get(query);
  if (emailToName.has(query)) return emailToName.get(query);
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
