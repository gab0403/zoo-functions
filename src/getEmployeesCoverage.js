const data = require('../data/zoo_data');

const { employees, species } = data;

function locations(...ids) {
  const animalObj = species.filter((animal) => ids.includes(animal.id));
  const result = animalObj.map((home) => home.location);
  return result;
}
function objAnimal(...ids) {
  const animalObj = species.filter((animal) => ids.includes(animal.id));
  const result = animalObj.map((element) => element.name);
  return result;
}
function theEmployees() {
  const newArray = employees.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: objAnimal(...element.responsibleFor),
    locations: locations(...element.responsibleFor),
  }));
  return newArray;
}

function getEmployeesCoverage(object) {
  if (!object) {
    return theEmployees();
  }
  const { id, name } = object;
  const employee = data.employees.find((emp) =>
    emp.firstName === name || emp.lastName === name || emp.id === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const employeesObj = employees.find((element) =>
    element.id === id || element.firstName === name || element.lastName === name);
  const { firstName, lastName } = employeesObj;
  return {
    id: employeesObj.id,
    fullName: `${firstName} ${lastName}`,
    species: objAnimal(...employeesObj.responsibleFor),
    locations: locations(...employeesObj.responsibleFor),
  };
}
module.exports = getEmployeesCoverage;
