const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((people) => people.age < 18);
  const adult = entrants.filter(
    (people) => people.age >= 18 && people.age < 50,
  );
  const senior = entrants.filter((people) => people.age >= 50);
  const result = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const classificatedEntrants = countEntrants(entrants);
  const totalChild = classificatedEntrants.child * data.prices.child;
  const totalAdult = classificatedEntrants.adult * data.prices.adult;
  const totalSenior = classificatedEntrants.senior * data.prices.senior;
  return totalChild + totalAdult + totalSenior;
}

module.exports = { calculateEntry, countEntrants };
