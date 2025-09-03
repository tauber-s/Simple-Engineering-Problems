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

let powerMap = new Map(Object.entries(power));
let leaderboardMap = new Map(Object.entries(leaderboard));

// should return the power of a given person
const getPower = person => {
  return powerMap.get(person);
};

// should recive 2 names and the with one is the most powerful(should use function getPower)
const mostPowerful = (p1, p2) => getPower(p1) > getPower(p2) ? p1 : p2;

// should recive 2 names and update the leaderboard
const play = (p1, p2) => {
    if (getPower(p1) === getPower(p2)) {
        [p1,p2].forEach(p => leaderboardMap.set(p, leaderboardMap.get(p) + 5));
        return;
    };
  const winner = mostPowerful(p1, p2);
  const loser = winner === p1 ? p2 : p1;
  leaderboardMap.set(winner, leaderboardMap.get(winner) + 10);
  leaderboardMap.set(loser, leaderboardMap.get(loser) - 5);
};

play("John", "Paul");
play("John", "Ringo");

console.log(leaderboardMap);