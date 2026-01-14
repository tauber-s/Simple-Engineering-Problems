class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
};

class FriendsList {
  constructor() {
    this.friends = new Map(); // key = friend.name
  };

  add(friend) {
    if (this.friends.has(friend.name)) {
      return false;
    };
    this.friends.set(friend.name, friend);
    return true;
  };

  remove(friendName) {
    return this.friends.delete(friendName);
  };

  getAll() {
    return [...this.friends.values()];
  };

  count() {
    return this.friends.size;
  };

  getOldestFriend() {
    if (this.friends.size === 0) return null;

    return [...this.friends.values()].reduce(
      (oldest, current) =>
        current.age > oldest.age ? current : oldest
    );
  };
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friendsList = new FriendsList();
  };

  addFriend(name, age) {
    return this.friendsList.add(new Friend(name, age));
  };

  removeFriend(name) {
    return this.friendsList.remove(name);
  };

  getFriends() {
    return this.friendsList.getAll();
  };

  getFriendsCount() {
    return this.friendsList.count();
  };

  getOldestFriend() {
    return this.friendsList.getOldestFriend();
  };

  getName() {
    return this.name;
  };

  getAge() {
    return this.age;
  };
};

class People {
  static withMoreFriends(people) {
    return people.reduce((max, current) =>
      current.getFriendsCount() > max.getFriendsCount()
        ? current
        : max
    );
  };

  static withLessFriends(people) {
    return people.reduce((min, current) =>
      current.getFriendsCount() < min.getFriendsCount()
        ? current
        : min
    );
  };

  static withOldestFriend(people) {
    let result = null;
    let oldestAge = -Infinity;

    for (const person of people) {
      const oldestFriend = person.getOldestFriend();
      if (oldestFriend && oldestFriend.age > oldestAge) {
        oldestAge = oldestFriend.age;
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
