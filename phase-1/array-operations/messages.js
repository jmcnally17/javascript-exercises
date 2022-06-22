const message = (name) => {
  return `Hello ${name}! 50% off our best candies for you today!`;
}

const generateMessages = (names) => {
  return names.map(message);
}