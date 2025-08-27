const user = {id: 1, name: 'John', email: 'john@john.john.com'};

const lookupDict = {
  [user.id]: user.name,
  [user.name]: user.email,
  [user.email]: user.name
};

const lookup = (query) => {
  return lookupDict[query]
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
