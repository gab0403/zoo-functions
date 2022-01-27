const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const employee = employees.find((people) => people.id === id);
  const animal = employee.responsibleFor[0];
  const animalObj = species.find((animalId) => animalId.id === animal);
  const resident = animalObj.residents.sort((animal1, animal2) => animal2.age - animal1.age);
  return Object.values(resident[0]);
}

module.exports = getOldestFromFirstSpecies;
