const user = [{id: 1, name: 'John', email: 'john@john.john.com'}];

const lookup = (query) => {
  const lookupDict = {};

  user.forEach(u => {
    lookupDict[`id:${u.id}`] = u.name;
    lookupDict[`name:${u.name}`] = u.email;
    lookupDict[`email:${u.email}`] = u.name;
  });

  if (typeof query === "number") return lookupDict[`id:${query}`] || null;
  if (query.includes("@")) return lookupDict[`email:${query}`] || null;
  return lookupDict[`name:${query}`];
};

console.log(lookup(1));
console.log(lookup('John'));
console.log(lookup('john@john.john.com'));
