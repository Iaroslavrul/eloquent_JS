const countBs = str => {
  let count = 0,
    i = 0;
  for (; i < str.length; i++) {
    if (str[i] === "B") count++;
  }
  return `В строке ${count} букв 'B'`;
};
console.log(countBs("Better Bought"));

const countChar = (str, charFind) => {
  let count = 0,
    i = 0;
  for (; i < str.length; i++) {
    if (str[i] === charFind) count++;
  }
  return `В строке ${count} букв '${charFind}'`;
};
console.log(countChar("Better Bought", "t"));
