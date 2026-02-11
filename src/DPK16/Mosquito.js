export class Mosquito {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.movesAlive = 0;
    this.alive = true;
  };

  move(matrixSize) {
    if (!this.alive) return;
    
    const directions = [
      [-1,0],[1,0],[0,-1],[0,1],
      [-1,-1],[-1,1],[1,-1],[1,1]
    ];
    
    const [dx, dy] = directions[Math.floor(Math.random() * directions.length)];

    this.x = Math.max(0, Math.min(matrixSize-1, this.x + dx));
    this.y = Math.max(0, Math.min(matrixSize-1, this.y + dy));

    this.movesAlive++;
  };

  kill() {
    this.alive = false;
  };

  resetLife() {
    this.movesAlive = 0;
  };
};
