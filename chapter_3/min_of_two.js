const min = (a, b) => {
  if (a > b) return b;
  else if (a < b) return a;
  else return "Числа равны";
};
console.log(min(5, 4));
