import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import cashIn from '../../services/cashIn.js';

test('cashIn is a function exists', () => {
  expect(typeof cashIn).toEqual('function');
});

test('cashIn expected result', () => {
  cashIn({ amount: 300, cashInPercents: 0.03, maxAmountCashIn: 5 });
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual(((300 * 0.03) / 100).toFixed(2));
  });
});
