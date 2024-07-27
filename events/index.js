const Shop = require("./shop");

const shop = new Shop();

shop.on("order", (item) => {
  console.log(item + " is ordered");
});

shop.orderItem("apple");
shop.orderItem("orange");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, spiciness) => {
//   console.log(`order received for ${size} size and ${spiciness} pizza`);
// });

// emitter.emit("order-pizza", "large", "spicy");
