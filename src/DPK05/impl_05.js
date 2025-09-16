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

const win = (x, y) => (leaderboard[x]+=10, leaderboard[y]-=5, x);
const draw = (x, y) => (leaderboard[x]+=5, leaderboard[y]+=5, "Draw");

// should return the power of a given person
const getPower = person => {
  return power[person];
};

// should recive 2 names and the with one is the most powerful(should use function getPower)
const mostPowerful = (p1, p2) => getPower(p1) > getPower(p2) ? p1 : p2;

// should recive 2 names and update the leaderboard
const play = (p1, p2) => {
  return getPower(p1) > getPower(p2) ? win(p1,p2) :
         getPower(p1) < getPower(p2) ? win(p2,p1) : draw(p1,p2);
};

play("John", "Paul");
play("John", "Ringo");

console.log(leaderboard);