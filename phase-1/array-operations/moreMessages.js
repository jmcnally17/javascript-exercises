const message = (person) => {
  return `Hello ${person.name}! ${person.discount}% off our best candies for you today!`;
}

const generateMessages = (people) => {
  return people.map(message);
}