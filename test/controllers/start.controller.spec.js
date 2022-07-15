import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import start from '../../controllers/start.controller.js';
import parseInputData from '../../services/parseInputData.js';
import config from '../../config/config.js';

const path = './test/input.test.json';

test('start is a function exists', () => {
  expect(typeof start).toEqual('function');
});

test('start expected behavior', async () => {
  const expectedResult = await parseInputData(path);
  expect(expectedResult).toMatchObject(expectedResult);
  expect(config.cashInAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-in');
  expect(config.cashOutNaturalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural');
  expect(config.cashOutLegalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical');
});
