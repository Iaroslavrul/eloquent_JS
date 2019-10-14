const everyCycle = (arr, f) => {
  for (let el of arr) {
    if (!f(el)) return false;
  }
  return true;
};
everyCycle([7, 6, 3, 8], el => !(el > 5));



const everySome = (arr, f) => {
  if (arr.some(f)) return false;
  else return true;
};
everySome([7, 6, 9, 8], el => !(el > 5));
