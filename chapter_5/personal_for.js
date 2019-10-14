const condition = value => {
  return value < 10;
};


const update = value => {
  return (value += 1);
};


const body = value => {
  console.log(value);
};


const loop = (value, condition, update, body) => {
  for (value; condition(value); value = update(value)) {
    body(value);
  }
};
loop(7, condition, update, body);
