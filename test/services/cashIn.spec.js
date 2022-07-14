import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import cashIn from '../../services/cashIn.js';

test('cashIn is a function exists', () => {
  expect(typeof cashIn).toEqual('function');
});

test('cashIn expected result', () => {
  const expectedResult = cashIn(300);
  expect(expectedResult).toEqual(((300 * 0.03) / 100).toFixed(2));
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual(expectedResult);
  });
});
