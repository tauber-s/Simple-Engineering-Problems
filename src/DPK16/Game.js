import { Exterminator } from './Exterminator.js'
import { Mosquito } from './Mosquito.js';

export class Game {
  constructor(matrixSize) {
    this.matrixSize = matrixSize;
    this.mosquitos = [];
    this.exterminator = new Exterminator(matrixSize);
    this.mosquitosKilled = 0;
  };

  initMosquitos(count) {
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * this.matrixSize);
      const y = Math.floor(Math.random() * this.matrixSize);
      this.mosquitos.push(new Mosquito(x, y));
    };
  };

  reproduction(mosquito) {
    const nearby = this.mosquitos.find(m =>
      m !== mosquito &&
      m.alive &&
      Math.abs(m.x - mosquito.x) <= 1 &&
      Math.abs(m.y - mosquito.y) <= 1
    );

    if (nearby && !this.isPositionOccupied(mosquito.x, mosquito.y))
      this.mosquitos.push(new Mosquito(mosquito.x, mosquito.y));
  };

  moves() {
    this.exterminator.move();

    for (const mosquito of this.mosquitos) {
      if (!mosquito.alive) continue;
      mosquito.move(this.matrixSize);

      if (mosquito.x === this.exterminator.x && mosquito.y === this.exterminator.y) {
        mosquito.kill();
        this.mosquitosKilled++;
        continue;
      };

      if (mosquito.movesAlive >= 5)
        this.reproduction(mosquito);
    };
  };

  getKilledCount() {
    return this.mosquitosKilled;
  };

  getAliveCount() {
    return this.mosquitos.filter(m => m.alive).length;
  };

  isPositionOccupied(x, y) {
    return this.mosquitos.some(m => m.x === x && m.y === y);
  }

  printMatrix() {
    const matrix = Array.from({ length: this.matrixSize }, () => Array(this.matrixSize).fill("."));
    const { x, y } = this.exterminator;

    for (const mosquito of this.mosquitos) {
      if (mosquito.alive)
        matrix[mosquito.x][mosquito.y] = "M";
      else
        matrix[mosquito.x][mosquito.y] = "X";
    };

    if (matrix[x][y] === "M")
      matrix[x][y] = "X";
    else
      matrix[x][y] = "E";

    console.clear();
    console.log(matrix.map(row => row.join(" ")).join("\n"));
    console.log("\n");
    console.log("Killed:", this.getKilledCount());
    console.log("Alive:", this.getAliveCount());
  };

  start() {
    this.initMosquitos(10);

    setInterval(() => {
      this.moves(this.matrixSize);
      this.printMatrix()
    }, 1000);
  };
};