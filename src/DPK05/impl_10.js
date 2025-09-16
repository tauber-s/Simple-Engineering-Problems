/*
 * DPK05 Pointers
 * Considering the following hash map:
 *
 * power = {
 *   "John": 100,
 *   "Paul": 90,
 *   "George": 80,
 *   "Ringo": 70
 * }
 *
 * Create three functions. 
 * 1. Function one should return the power of a given person.
 * 2. Function two should recive 2 names and the with one is the most powerful(should use function one).
 * 3. Function three should recive 2 names and update the leaderboard.
 * 
 * Now the thrid function that will update the leaderboard after all the matches.
 * i.e Leaderboard should be:
 *
 * leaderboard = {
 *   "John": 0,
 *   "Paul": 0,
 *   "George": 0,
 *   "Ringo": 0
 * }
 *
 * Every time a play wins, he scores +10 points, if there is a draw, both players score +5 points.
 * IF one player loses, he scores -5 points.
 *
 * play("John", "Paul") -> "John"
 * leaderboard -> {
 *   "John": 10,
 *   "Paul": -5,
 *   "George": 0,
 *   "Ringo": 0
 * }
 *
 * lets do another round:
 *
 * play("John", "Ringo") -> "John"
 * leaderboard -> {
 *   "John": 20,
 *   "Paul": -5,
 *   "George": 0,
 *   "Ringo": -5
 * }
 *
 * Now can you refactor your code and do less ifs? Maybe introduce pointers?
*/

const power = {
  "John": 100,
  "Paul": 90,
  "George": 80,
  "Ringo": 70
};

let leaderboard = {
  "John": 0,
  "Paul": 0,
  "George": 0,
  "Ringo": 0
};

// should return the power of a given person
const getPower = person => {
  return power[person];
};

// should recive 2 names and the with one is the most powerful(should use function getPower)
const mostPowerful = (person1, person2) => {
  if(getPower(person1) === getPower(person2)) {
    leaderboard[person1] += 5;
    leaderboard[person2] += 5;
  };

  if(getPower(person1) > getPower(person2)) {
    leaderboard[person1] += 10;
    leaderboard[person2] += -5;
  } else {
    leaderboard[person1] += -5;
    leaderboard[person2] += 10;
  };
};

// should recive 2 names and update the leaderboard
const play = (p1, p2) => {
  const diff = Math.sign(getPower(p1) - getPower(p2));
  const rules = {
    "1": () => (leaderboard[p1] += 10, leaderboard[p2] -= 5, p1),
    "-1": () => (leaderboard[p2] += 10, leaderboard[p1] -= 5, p2),
    "0": () => (leaderboard[p1] += 5, leaderboard[p2] += 5, "Draw")
  };
  return rules[diff]();
};

play("John", "Paul");
play("John", "Ringo");

console.log(leaderboard);
