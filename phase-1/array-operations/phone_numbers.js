const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  }
  return false;
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}