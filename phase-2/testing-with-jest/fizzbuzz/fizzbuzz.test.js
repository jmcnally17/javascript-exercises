const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('gives Fizz for a number divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('gives Buzz for a number divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('gives the number for a number not divisible by 3 or 5', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('gives FizzBuzz for a number divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});