const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const theManagers = employees.find((manager) => manager.managers.includes(id));
  if (theManagers) {
    return true;
  }
  if (!theManagers) {
    return false;
  }
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
