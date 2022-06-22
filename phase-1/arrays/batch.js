const addToBatch = (array, number) => {
  if (array.length > 4) {
    return array;
  }
  return array.concat(number);
}