const printHello = () => {
  console.log("Hello there!");
}

const executeAfterDelay = (time, greetingFunction) => {
  setTimeout(greetingFunction, time*1000);
}