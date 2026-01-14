class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  };

  addFriend(name, age) {
    if (this.friends.some(f => f.name === name)) return false;
    this.friends.push(new Friend(name, age));
    return true;
  };

  removeFriend(name) {
    const size = this.friends.length;
    this.friends = this.friends.filter(f => f.name !== name);
    return size !== this.friends.length;
  };

  getFriends() {
    return this.friends;
  };

  getFriendsCount() {
    return this.friends.length;
  };

  getOldestFriend() {
    if (!this.friends.length) return null;
    return this.friends.reduce((oldest, current) => current.age > oldest.age ? current : oldest);
  };

  getName() {
    return this.name;
  };
};

class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
};

class People {
  static withMoreFriends(people) {
    return people.reduce((max, current) =>
      current.getFriendsCount() > max.getFriendsCount() ? current : max
    );
  };

  static withLessFriends(people) {
    return people.reduce((min, current) =>
      current.getFriendsCount() < min.getFriendsCount() ? current : min
    );
  };

  static withOldestFriend(people) {
    let result = null;
    let oldestFriendAge = 0;

    for (const person of people) {
      const oldestFriend = person.getOldestFriend();
      if (oldestFriend && oldestFriend.age > oldestFriendAge) {
        oldestFriendAge = oldestFriend.age;
        result = person;
      };
    };

    return result;
  };
};

const p1 = new Person("John", 30);
p1.addFriend("Paul", 35);
p1.addFriend("George", 40);

const p2 = new Person("Mary", 28);
p2.addFriend("Anna", 50);

const p3 = new Person("Bob", 40);

const people = [p1, p2, p3];

console.log(People.withMoreFriends(people).getName());
console.log(People.withLessFriends(people).getName());
console.log(People.withOldestFriend(people).getName());