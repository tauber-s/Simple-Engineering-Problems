const grid = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const move = (grid, [row, col], moves) => {
  let beaten = [];
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;
  let nextRow = row, nextCol = col;
  moves.reduce((_,walk)=>{
    if(walk === "up") nextRow = row-1 < 0 ? maxRow : row-1;
    if(walk === "down") nextRow = row+1 > maxRow ? 0 : row+1;
    if(walk === "left") nextCol = col-1 < 0 ? maxCol : col-1;
    if(walk === "right") nextCol = col+1 > maxCol ? 0 : col+1;

    row = nextRow; 
    col = nextCol;
    if (grid[row][col]) 
      beaten.push(grid[row][col]);
    grid[row][col] = "";
  });
  return beaten;
};

console.log(move(grid, [0,0], ["up", "left", "down", "right"]));