class ShoppingBasket {
  constructor () {
    this.items = [];
  }

  getTotalPrice = () => {
    let sum = 0;
    this.items.forEach((item) => sum += item.getPrice());
    return sum;
  }

  addItem = (item) => {
    this.items.push(item);
  }
}

module.exports = ShoppingBasket;