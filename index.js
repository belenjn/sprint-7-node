// Node.js program to demonstrate the
// fs.readFileSync() method

// Include fs module

const fs = require("fs");
// Calling the readFileSync() method
// to read 'countries.txt' file
const countries = fs.readFileSync("./countries.txt", {
  encoding: "utf8",
  flag: "r",
});

console.log(countries);
