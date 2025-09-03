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
const mostPowerful = (p1, p2) => {
  if (getPower(p1) === getPower(p2)) {
    [p1,p2].forEach(p => leaderboard[p] += 5);
    return;
  }

  let winner = [p1,p2].reduce((x,y) => getPower(x) >= getPower(y) ? x : y);
  let loser = winner === p1 ? p2 : p1;
  leaderboard[winner] += 10;
  leaderboard[loser] -= 5;
};

// should recive 2 names and update the leaderboard
const play = (person1, person2) => {
  mostPowerful(person1, person2);
  console.log(leaderboard);
};

play("John", "Paul");
play("John", "Ringo");
