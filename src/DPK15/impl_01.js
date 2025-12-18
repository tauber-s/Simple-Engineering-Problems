class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  getFriends() {
    return this.friends;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }
}

const person = new Person("John", 30);
person.addFriend("Paul");
person.addFriend("George");
person.addFriend("Ringo");

console.log(person);
console.log(person.getFriends());
console.log(person.getAge());
console.log(person.getName());