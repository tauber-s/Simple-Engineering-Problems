class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
};

class FriendsList {
  constructor() {
    this.friends = new Map();
  };

  add(friend) {
    if (this.friends.has(friend.name)) return false;
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
  constructor(name, age, friendsList) {
    this.name = name;
    this.age = age;
    this.friendsList = friendsList ?? new FriendsList();
  };

  addFriend(friend) {
    return this.friendsList.add(friend);
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

class PersonBuilder {
  constructor() {
    this.name = null;
    this.age = null;
    this.friendsList = new FriendsList();
  };

  withName(name) {
    this.name = name;
    return this;
  };

  withAge(age) {
    this.age = age;
    return this;
  };

  addFriend(name, age) {
    this.friendsList.add(new Friend(name, age));
    return this;
  };

  build() {
    if (!this.name || this.age === null) {
      throw new Error("Person must have name and age");
    };

    return new Person(this.name, this.age, this.friendsList);
  };
};

class People {
  constructor(people) {
    this.people = people;
  };

  withMoreFriends() {
    return this.people.reduce((max, current) =>
      current.getFriendsCount() > max.getFriendsCount() ? current : max
    );
  };

  withLessFriends() {
    return this.people.reduce((min, current) =>
      current.getFriendsCount() < min.getFriendsCount() ? current : min
    );
  };

  withOldestFriend() {
    let result = null;
    let oldestAge = 0;

    for (const person of this.people) {
      const oldestFriend = person.getOldestFriend();
      if (oldestFriend && oldestFriend.age > oldestAge) {
        oldestAge = oldestFriend.age;
        result = person;
      };
    };

    return result;
  };
};

const p1 = new PersonBuilder()
  .withName("John")
  .withAge(30)
  .addFriend("Paul", 35)
  .addFriend("George", 40)
  .build();

const p2 = new PersonBuilder()
  .withName("Mary")
  .withAge(28)
  .addFriend("Anna", 50)
  .build();

const p3 = new PersonBuilder()
  .withName("Bob")
  .withAge(40)
  .build();

const people = new People([p1, p2, p3]);

console.log(people.withMoreFriends());
console.log(people.withLessFriends());
console.log(people.withOldestFriend());
