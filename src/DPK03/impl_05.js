const user = [{id: 1, name: 'John', email: 'john@john.john.com'}];

const lookup = (query) => {
  if (user[query]) return user[query].name;
  for (const id in user) {
    if (user[id].name === query) return user[id].email;
    if (user[id].email === query) return user[id].name;
    return user[id].name;
  }
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
