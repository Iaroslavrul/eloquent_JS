const reverseArray = arr => {
  let reverserArr = [];
  for (let i of arr) {
    reverserArr.unshift(i);
  }
  return reverserArr;
};
const arr = reverseArray([5, 4, 3, 2, 1]);
console.log(arr);

const reverseArrayInPlace = arr => {
  let mirror;
  for (let i = 0; arr.length - 1 - i >= Math.ceil(arr.length / 2); i++) {
    mirror = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = mirror;
  }
  return arr;
};
const arrI = reverseArrayInPlace([5, 4, 3, 2, 1]);
console.log(arrI);
