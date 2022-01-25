const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((bichos) => ids.includes(bichos.id));
}

module.exports = getSpeciesByIds;
