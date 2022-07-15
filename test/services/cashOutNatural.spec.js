import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import cashOutNatural from '../../services/cashOutNatural.js';

test('cashOutNatural is a function exists', () => {
  expect(typeof cashOutNatural).toEqual('function');
});

test('cashOutNatural expected result', async () => {
  const result = await cashOutNatural({
    amount: 400,
    users: [{ user_id: 3, date: '2016-01-06', amount: 800 }],
    date: '2016-01-06',
    user_id: 1,
    cashOutNaturalPercents: 0.3,
    weekLimitCashOutNatural: 1000,
  });
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual(result);
  });
});
