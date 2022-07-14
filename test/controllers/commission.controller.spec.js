import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import parseInputData from '../../services/parseInputData.js';
import commission from '../../controllers/commission.controller.js';

const path = './input.json';

test('commission is a function exists', () => {
  expect(typeof commission).toEqual('function');
});

test('commission expected result', async () => {
  const expectedResult = await parseInputData(path);
  expect(expectedResult).toMatchObject(expectedResult);
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual(expectedResult);
  });
});
