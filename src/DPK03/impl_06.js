const user = {id: 1, name: 'John', email: 'john@john.john.com'};

const lookup = (query) => {
  switch (typeof query) {
    case "number": return query == user.id ? user.name : null;
    case "string":
      if (query == user.name) return user.email;
      if (query == user.email) return user.name;
  }
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
