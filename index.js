// Node.js program to demonstrate the
// fs.readFileSync() method

// Include fs module

const fs = require("fs");

// Calling the readFileSync() method
// to read 'countries.txt' file
const countries = fs
  .readFileSync("./countries.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split("\n");

const title = countries.shift() + "\n";

const countriesArray = countries
  .map((country) => country.split(" "))
  .map((country) => {
    const name = country
      .splice(0, country.length - 2)
      .join()
      .replace(/,/g, " ");
    const population = parseInt(country[country.length - 2].replace(/,/g, ""));
    const area = parseInt(country[country.length - 1].replace(/,/g, ""));

    const density = population / area;

    const data = {
      name: name,
      population: population,
      area: area,
      density: density,
    };

    return data;
  });

const sorted = countriesArray.sort((a, b) => a.density - b.density);

const finalCountries =
  title +
  "\n" +
  sorted
    .map(
      (country) => Object.values(country).join(" | ").toString() + ";" + "\n"
    )
    .join("\n");

fs.writeFileSync("countries.csv", finalCountries);
