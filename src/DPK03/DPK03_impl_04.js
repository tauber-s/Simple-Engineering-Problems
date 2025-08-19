const user = [{id: 1, name: 'John', email: 'john@john.john.com'}];

const lookup = (query) => {
  for(let item of user) {
    if(item.id === query) return item.name;
    if(item.name === query) return item.email;
    return item.name;
  };
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
