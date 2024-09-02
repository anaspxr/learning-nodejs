const fs = require("fs");

const readableSteam = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
});

const writableStream = fs.createWriteStream("./file2.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableSteam.pipe(writableStream);

// readableSteam.on("data", (chunk) => {
//   console.log("chunk:", chunk);
//   writableStream.write(chunk);
// });
