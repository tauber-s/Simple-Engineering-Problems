class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
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

class Friend {
  constructor(person) {
    this.person = person;
    this.friends = [];
  }

  addFriend(friend) {
    if(!this.friends.includes(friend))
      this.friends.push(friend);
  }

  getFriends() {
    return this.friends;
  }

  removeFriend(friend) {
    if(this.friends.includes(friend))
      this.friends.splice(this.friends.indexOf(friend), 1)
  }
}

const person = new Person("John", 30);
const friend = new Friend(person);
friend.addFriend("Paul");
friend.addFriend("George");
friend.addFriend("Ringo");

console.log(person);
console.log(friend.getFriends());
console.log(person.getAge());
console.log(person.getName());

friend.removeFriend("George");

console.log(friend.getFriends());