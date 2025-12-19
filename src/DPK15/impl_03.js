class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
  
  moreFriends(people) {
      const totalFriends = people[0].friends.lenght();
      // for loop people to verify if lenght friends is more than totalFriends
  }
}

const person = new Person("John", 30);
const friend = new Friend(person);
friend.addFriend("Paul");
friend.addFriend("George");
friend.addFriend("Ringo");

const person2 = new Person("Johnie", 31);
const friend2 = new Friend(person2);
friend2.addFriend("Paul");
friend2.addFriend("George");

// console.log(person);
// console.log(friend.getFriends());
// console.log(person.getAge());
// console.log(person.getName());
console.log(friend);
console.log(friend2);
// friend.removeFriend("George");

// console.log(friend.getFriends());