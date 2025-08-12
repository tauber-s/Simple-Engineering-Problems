/*
* DPK03 Lookup
* Create a function that perform a lookup in a map for a given key you hould have id, name.
* lookup(1) -> "John"
* 
* Refactor the code so you can lookup for email as well and ge the name and vice versa.
* lookup("John") -> "john@john.jhon.com"
* lookup("john@john.jhon.com") -> "John"
*/

const lookup = (key) => {
    const userMap = new Map();
    userMap.set(1, 'John');
    
    return userMap.get(key);
};

console.log(lookup(1));
