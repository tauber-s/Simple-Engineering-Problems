export class Exterminator {
  constructor(matrixSize) {
    this.matrixSize = matrixSize;
    this.x = matrixSize-1;
    this.y = 0;
    this.direction = "diagonal"; 
  };

  move() {
    switch (this.direction) {
      case "diagonal":
        this.x--;
        this.y++;
        if (this.x <= 0 && this.y >= this.matrixSize-1) {
          this.direction = "vertical";
          this.x = this.matrixSize-1;
          this.y = this.matrixSize-1;
        };
        break;

      case "vertical":
        this.x--;
        if (this.x <= 0)
          this.direction = "back-diagonal";
        break;

      case "back-diagonal":
        this.x++;
        this.y--;
        if (this.x >= this.matrixSize-1 && this.y <= 0) 
          this.direction = "diagonal";
        break;
    };
  };
};