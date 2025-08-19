/*
* DPK03 Lookup
* Create a function that perform a lookup in a map for a given key you hould have id, name.
* lookup(1) -> "John"
* 
* Refactor the code so you can lookup for email as well and ge the name and vice versa.
* lookup("John") -> "john@john.jhon.com"
* lookup("john@john.jhon.com") -> "John"
*/

const user = [{id: 1, name: 'John', email: 'john@john.john.com'}];

/*const lookup = (key) => {
  const result = user.find(item => item.id === key);
  return result.name;
};*/

const lookup = (query) => {
  const result = user.find(item => item.id === query || item.name === query || item.email === query);
    
  if(typeof query == 'number' || query.includes('@')) {
    return result.name;
  };
  return result.email;
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
