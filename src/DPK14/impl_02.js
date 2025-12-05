const grid = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const move = (grid, [row, col], moves) => {
  const beaten = [];
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;
  
  for (const walk of moves) {
    let nextRow = row, nextCol = col
    switch (walk) {
      case "up": {
        nextRow--;
        if (nextRow < 0) nr = maxRow;
        break;
      }
      case "down": {
        nextRow++;
        if (nextRow > maxRow) nextRow = 0;
        break;
      }
      case "left": {
        nextCol--;
        if (nextCol < 0) nextCol = maxCol;
        break;
      }
      case "right": {
        nextCol++;
        if (nextCol > maxCol) nextCol = 0;
        break;
      }
    }
    
    if (grid[nextRow]?.[nextCol] !== undefined) {
      grid[row][col] = "";
      row = nextRow; 
      col = nextCol;

      if (grid[row][col]) 
        beaten.push(grid[row][col]);
      grid[row][col] = "";
    }
  }
  return beaten;
};

console.log(move(grid, [0,0], ["up", "left", "down", "right"]));