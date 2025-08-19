const user = [{id: 1, name: 'John', email: 'john@john.john.com'}];

const lookup = (query) => {
  if(typeof query == 'number')
    return user.find(item => item.id === query).name;

  if(query.includes('@'))
    return user.find(item => item.email === query).name;
  
  return user.find(item => item.name === query).email;
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
