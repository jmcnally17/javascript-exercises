const multiply = require('./multiply')

describe('multiply', () => {
  it('multiplies 3 and 8', () => {
    expect(multiply(3,8)).toBe(24);
  });

  it('multiplies 24 and 106', () => {
    expect(multiply(24,106)).toBe(2544);
  });
});