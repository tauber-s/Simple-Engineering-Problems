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
const mostPowerful = (p1, p2) => getPower(p1) > getPower(p2) ? p1 : p2;

// should recive 2 names and update the leaderboard
const play = (p1, p2) => {
  const values = [p1, p2].map(p => [p, getPower(p)]);
  const winner = values.reduce((acc,cur)=>cur[1]>acc[1]?cur:acc);
  if (values[0][1] === values[1][1]) {
    leaderboard[p1]+=5; leaderboard[b]+=5; return;
  }
  const loser = values.find(v=>v[0]!==winner[0])[0];
  leaderboard[winner[0]]+=10;
  leaderboard[loser]-=5;
  return winner[0];
};

play("John", "Paul");
play("John", "Ringo");

console.log(leaderboard);