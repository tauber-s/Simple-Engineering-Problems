class Observable {
  constructor() {
    this.observers = new Set();
  };

  subscribe(fn) {
    this.observers.add(fn);
    return () => this.observers.delete(fn);
  };

  notify(data) {
    this.observers.forEach(fn => fn(data));
  };
};

class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
};

class FriendsList extends Observable {
  constructor() {
    super();
    this.friends = new Map(); // key = friend.name
  };

  add(friend) {
    if (this.friends.has(friend.name)) {
      return false;
    };

    this.friends.set(friend.name, friend);
    this.notify({
      type: "add",
      friend,
      list: this.getAll()
    });

    return true;
  };

  remove(friendName) {
    const removed = this.friends.get(friendName);
    const success = this.friends.delete(friendName);

    if (success) {
      this.notify({
        type: "remove",
        friend: removed,
        list: this.getAll()
      });
    };

    return success;
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
    this.friendsList.subscribe(event => {
      console.log(
        `[${this.name}] FriendsList changed:`,
        event.type,
        event.friend?.name
      );
    });
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
  constructor(people) {
    this.people = people;
  }

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

const p1 = new Person("John", 30);
p1.addFriend("Paul", 35);
p1.addFriend("George", 40);

const p2 = new Person("Mary", 28);
p2.addFriend("Anna", 50);

const p3 = new Person("Bob", 40);

const people = new People([p1, p2, p3]);

console.log(people.withMoreFriends());
console.log(people.withLessFriends());
console.log(people.withOldestFriend());
