const conv = arr => {
  return arr.reduce((firstArr, secondArr) => firstArr.concat(secondArr));
};
conv([[1, 2], [3, 4], [5, 6], [7, 8]]);
