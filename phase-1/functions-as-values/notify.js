const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
}

const notify = (details, notifyFunction) => {
  return notifyFunction(details);
}