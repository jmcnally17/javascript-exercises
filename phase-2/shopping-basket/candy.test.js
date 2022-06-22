const Candy = require('./candy');

describe('candy', () => {
  it('has a name and price when created', () => {
    let candy = new Candy('Mars', 1.99);
    expect(candy.name).toBe('Mars');
    expect(candy.price).toBe(1.99);
  });
});