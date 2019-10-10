const board_builder = (h, w) => {
  let i;
  for (i = 1; i <= h; i++) {
    if (i % 2 !== 0) console.log(" #".repeat(w));
    else console.log("# ".repeat(w));
  }
};
board_builder(4, 8);
