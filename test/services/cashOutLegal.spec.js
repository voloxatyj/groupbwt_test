import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import cashOutLegal from '../../services/cashOutLegal.js';

test('cashOutLegal is a function exists', () => {
  expect(typeof cashOutLegal).toEqual('function');
});

test('cashOutLegal expected result', () => {
  cashOutLegal({ amount: 300, cashOutLegalPercents: 0.3, minAmountCashOutLegal: 0.5 });
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual(((300 * 0.3) / 100).toFixed(2));
  });
});
