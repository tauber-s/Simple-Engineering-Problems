const user = {id: 1, name: 'John', email: 'john@john.john.com'};

const lookup = (query) => {
  if (query === user.id) return user.name;
  if (query === user.name) return user.email;
  if (query === user.email) return user.name;
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
