const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalAge = data.species
    .find((species) => species.name === animal)
    .residents.every((residentes) => residentes.age >= age);
  return animalAge;
}

module.exports = getAnimalsOlderThan;
