import { describe, test, expect } from 'vitest';
import { countAnimals } from '../js/counting-sheep';

describe('countAnimals', () => {

  test('returns sheep total when only sheep are present', () => {
    expect(countAnimals([true, true])).toBe(
      'There are 2 sheep in total'
    );
  });

  test('returns hungry wolves message when there are no sheep', () => {
    expect(countAnimals([false, false, false])).toBe(
      'UPS!!! A pack of hungry wolves'
    );
  });

  test('returns escaped sheep when sheep are the majority', () => {
    const result = countAnimals([true, false, true]);

    expect(result).toEqual('2 sheep escaped!!!');
  });

  test('returns wolves victory message when wolves are the majority', () => {
    const result = countAnimals([false, false, true, false]);

    expect(result).toEqual('UPS!!! Wolves ate all the sheep');
  });

  test('throws an error if argument is not an array', () => {
    const invalidInput = 'hola';

    expect(() => {
      countAnimals(invalidInput);
    }).toThrow();
  });

  test('throws an error if array contains values other than booleans', () => {
    const invalidAnimals = [true, 'wolf', 42];

    expect(() => {
      countAnimals(invalidAnimals);
    }).toThrow(
      'Invalid input: list must contain only boolean values'
    );
  });

});