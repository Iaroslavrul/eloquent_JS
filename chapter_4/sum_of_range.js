const rangeCreator = (start, end, step = 1) => {
  let arr = [];
  if (start < end) {
    for (; start < end; start += step) {
      arr.push(start);
    }
  } else {
    for (; start >= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
};
const arr = rangeCreator(1, 10, 2);
console.log(arr);
console.log(rangeCreator(5, 2, -1));
const sum_of_arr = arr => {
  let acc = 0;
  for (let i of arr) {
    acc += i;
  }
  return acc;
};
console.log(sum_of_arr(arr));
