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
  const players = [p1, p2].sort((x,y)=>getPower(y)-getPower(x));
  if (getPower(players[0]) === getPower(players[1])) {
    leaderboard[p1]+=5; leaderboard[p2]+=5; return;
  }
  leaderboard[players[0]]+=10;
  leaderboard[players[1]]-=5;
  return players[0];
};

play("John", "Paul");
play("John", "Ringo");

console.log(leaderboard);