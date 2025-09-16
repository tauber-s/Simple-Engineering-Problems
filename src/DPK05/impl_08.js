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

class Game {
  constructor(power, leaderboard) {
    this.power = power;
    this.leaderboard = leaderboard;
  }
  getPower(person) { return this.power[person]; }
  mostPowerful(p1, p2) {return this.getPower(p1) > this.getPower(p2) ? p1 : p2}
  play(p1,p2) {
    const winner = this.mostPowerful(p1, p2);
  if (this.getPower(p1) === this.getPower(p2)) {
    [p1,p2].forEach(p => this.leaderboard[p] += 5);
    return;
  };
  this.leaderboard[winner] += 10;
  this.leaderboard[winner === p1 ? p2 : p1] -= 5;
  }
}

const game = new Game(power, leaderboard);

game.play("John", "Paul");
game.play("John", "Ringo");

console.log(leaderboard);