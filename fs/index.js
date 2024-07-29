const { error } = require("node:console");
const fs = require("node:fs");

const file = fs.readFileSync("./file.txt", "utf8");
console.log(file);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(data);
  }
});

fs.writeFile("./hello.txt", " hello world", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

fs.appendFile("./file.txt", " hi world", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success appending");
  }
});
