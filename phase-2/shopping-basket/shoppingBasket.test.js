const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

jest.mock('./candy');

describe('ShoppingBasket', () => {
  beforeEach(() => {
    Candy.mockClear();
  });

  it('starts with an empty items array', () => {
    let basket = new ShoppingBasket;
    expect(basket.items).toEqual([]);
  });

  it('starts with a total price of 0', () => {
    let basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('can add an item and get the price', () => {
    let basket = new ShoppingBasket;

    const mockCandy = new Candy;
    mockCandy.getName.mockImplementation(() => 'Mars');
    mockCandy.getPrice.mockImplementation(() => 1.99);

    basket.addItem(mockCandy);

    expect(basket.items).toEqual(expect.arrayContaining([mockCandy]));
    expect(basket.getTotalPrice()).toBe(1.99);
    expect(mockCandy.getPrice).toHaveBeenCalledTimes(1);
  });
});