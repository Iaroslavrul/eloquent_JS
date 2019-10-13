const arrayToList = (arr, Oldlist = {}, list = {}) => {
  if (arr.length === 0) return Oldlist;
  if (Object.keys(Oldlist).length === 0) {
    list.rest = null;
  } else {
    list.rest = Oldlist;
  }
  list.value = arr.pop();
  return arrayToList(arr, list);
};
const list = arrayToList([2, 3]);

const listToArray = (list, arr = []) => {
  if (list.rest === null) {
    arr.push(list.value);
    return arr;
  }
  arr.push(list.value);
  return listToArray(list.rest, arr);
};
const arr = listToArray(list);
// console.log(arr);

const prepend = (el, list) => {
  let arr = listToArray(list);
  arr.unshift(el);
  return arrayToList(arr);
};
console.log(prepend(1, list));

const nth = (list, i) => {
  const arr = listToArray(list);
  return arr[i];
};
console.log(nth(list, 1));
