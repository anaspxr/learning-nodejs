const path = require("node:path"); // we can omit node: require("path")

console.log(__dirname); // returns the the full path to the file
console.log(__filename); // returns the the full path to the file including the filename

//* basename() returns the last portion of the path
console.log(path.basename(__dirname)); //path (name of the folder)
console.log(path.basename(__filename)); //index.js (name of the file)

//* extname() Return the extension of the path,
// from the last '.' to end of string in the last portion of the path.
// If there is no '.' in the last portion of the path or the first character of it is '.',
//then it returns an empty string.
console.log(path.extname(__dirname)); // empty string
console.log(path.extname(__filename)); // .js

//* parse() returns an object from the path string as below
console.log(path.parse(__filename));
/*
 {
    root: 'D:\\',
    dir: 'D:\\Anas\\prgrms\\bridgeon\\nodejs\\path',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }

*/

//* format() returns a path string from an object - the opposite of parse().
console.log(
  path.format({
    root: "D:\\",
    dir: "D:\\Anas\\prgrms\\bridgeon\\nodejs\\path",
    base: "index.js",
    ext: ".js",
    name: "index",
  })
); // D:\Anas\prgrms\bridgeon\nodejs\path\index.js

//* isAbsolute() Determines whether {path} is an absolute path.
// An absolute path will always resolve to the same location, regardless of the working directory.
//If the given {path} is a zero-length string, false will be returned.
console.log(path.isAbsolute(__filename)); //true
console.log(path.isAbsolute(__dirname)); //true
console.log(path.isAbsolute("./index.js")); //false (it is relative)
console.log(path.isAbsolute("")); //false

//* join() Join all arguments together and normalize the resulting path.
console.log(path.join("folder1", "folder2", "index.html")); // folder1\folder2\index.html
console.log(path.join("folder1", "//folder2", "../index.html")); // folder1\index.html
console.log(path.join(__dirname, "../moduleCaching/superHero.js")); //D:\Anas\prgrms\bridgeon\nodejs\moduleCaching\superHero.js

//* resolve()
console.log(path.resolve("folder1", "folder2", "index.html")); // D:\Anas\prgrms\bridgeon\nodejs\path\folder1\folder2\index.html
console.log(path.resolve("/folder1", "folder2", "index.html")); // D:\folder1\folder2\index.html
console.log(path.resolve("folder1", "//folder2", "../index.html")); // D:\index.html
console.log(path.resolve(__dirname, "../moduleCaching/superHero.js")); // D:\Anas\prgrms\bridgeon\nodejs\moduleCaching\superHero.js
