const deepEqual = (obj1, obj2) => {
  const obj1Prop = Object.keys(obj1);
  const obj2Prop = Object.keys(obj2);
  for (let i = 0; i < obj1Prop.length; i++) {
    if (
      obj1Prop[i] !== obj1Prop[i] ||
      (obj1[obj1Prop[i]] !== obj2[obj2Prop[i]] &&
        typeof obj1[obj1Prop[i]] !== "object")
    )
      return false;
    if (typeof obj1[obj1Prop[i]] === "object" && obj1[obj1Prop[i]] != null) {
      return deepEqual(obj1[obj1Prop[i]], obj2[obj2Prop[i]]);
    }
  }
  return true;
};
console.log(
  deepEqual(
    { key: "num", lock: { value: 3 } },
    { key: "num", lock: { value: 3 } }
  )
);
