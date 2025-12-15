const grid = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const move = (grid, start, moves) => {
  const maxRow = grid.length;
  const maxCol = grid[0].length;

  const directions = {
    up: ([r, c]) => [(r - 1 + maxRow) % maxRow, c],
    down: ([r, c]) => [(r + 1) % maxRow, c],
    left: ([r, c]) => [r, (c - 1 + maxCol) % maxCol],
    right: ([r, c]) => [r, (c + 1) % maxCol],
  };

  return moves.reduce(
    (state, walk) => {
      const [row, col] = state.pos;
      const [nextRow, nextCol] = directions[walk](state.pos);
      grid[row][col] = "";
      const target = grid[nextRow][nextCol];
      if (target) {
        state.beaten.push(target);
      }

      grid[nextRow][nextCol] = "";
      state.pos = [nextRow, nextCol];
      return state;
    },
    { pos: start, beaten: [] }
  ).beaten;
};

console.log(move(grid, [0,0], ["up", "left", "down", "right"]));