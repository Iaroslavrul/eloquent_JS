const repeat = (n, action) => {
  for (let i = 0; i < n; i++) {
    action(i);
  }
};
const unles = (test, then) => {
  if (!test) then();
};
repeat(3, n => {
  unles(n % 2 == 1, () => {
    console.log(n, "- четное число");
  });
});
