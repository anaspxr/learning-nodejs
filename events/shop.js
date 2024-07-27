const EventEmitter = require("node:events");

class Shop extends EventEmitter {
  constructor() {
    super();
    this.orders = [];
  }
  orderItem(item) {
    this.orders.push(item);
    this.emit("order", item);
  }
  displayOrderNumber() {
    return this.orders.length;
  }
}

module.exports = Shop;
