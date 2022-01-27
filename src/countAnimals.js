const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const totalAnimals = {};
    data.species.forEach((specie) => {
      totalAnimals[specie.name] = specie.residents.length;
    });
    return totalAnimals;
  }
  const { specie, sex } = animal;
  if (!sex) {
    const objAnimal = data.species.find((item) => item.name === animal.specie);
    return objAnimal.residents.length;
  }
  const animalList = data.species.find((item) => item.name === specie);
  const sexList = animalList.residents.filter(
    (resident) => resident.sex === sex,
  );
  return sexList.length;
}

module.exports = countAnimals;
