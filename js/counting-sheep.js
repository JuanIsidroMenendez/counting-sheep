
export function countAnimals(animals) {
  if (!Array.isArray(animals)) {
    throw new Error('Invalid input: list must contain only boolean values');
  }

  let sheep = 0;
  let wolves = 0;

  for (const animal of animals) {
    if (typeof animal !== 'boolean') {
      throw new Error('Invalid input: list must contain only boolean values');
    }

    animal ? sheep++ : wolves++;
  }

  if (sheep === 0) {
    return 'UPS!!! A pack of hungry wolves';
  }

  if (wolves === 0) {
    return `There are ${sheep} sheep in total`;
  }

  if (sheep > wolves) {
    return `${sheep} sheep escaped!!!`;
  }

  if (wolves > sheep) {
    return 'UPS!!! Wolves ate all the sheep';
  }
}






