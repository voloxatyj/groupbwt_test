import { test, expect } from '@jest/globals';
import parseInputData from '../../services/parseInputData.js';

const path = './input.json';

test('Testing Promise With Error', () => {
  parseInputData(path).catch((err) => {
    expect(err).toEqual(Error('Path is wrong'));
  });
});

test('Testing Promise With Return Data', async () => {
  const data = await parseInputData(path);
  expect(data).toMatchObject(data);
});
