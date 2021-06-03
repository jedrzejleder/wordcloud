export const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const getUniqueInts = (quantity, max) => {
  const arr = [];
  while (arr.length < quantity) {
    var candidateInt = Math.floor(Math.random() * max) + 1;
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
};
