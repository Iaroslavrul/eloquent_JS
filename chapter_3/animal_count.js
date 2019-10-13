const animal_count = (cow, chicken) => {
  while (String(cow).length < 3) {
    cow = "0" + cow;
  }
  console.log(`${cow} коров`);
  while (String(chicken).length < 3) {
    chicken = "0" + chicken;
  }
  console.log(`${chicken} цыплят`);
};
animal_count(111, 22);
