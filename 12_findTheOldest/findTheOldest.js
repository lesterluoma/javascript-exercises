const findTheOldest = function (people) {
  const getAge = (p) => {
    const end = p.yearOfDeath ?? new Date().getFullYear();
    return end - p.yearOfBirth;
  };

  let oldest = people[0];

  for (let i = 1; i < people.length; i++) {
    if (getAge(people[i]) > getAge(oldest)) {
      oldest = people[i];
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
