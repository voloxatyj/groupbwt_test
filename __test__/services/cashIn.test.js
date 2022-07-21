import cashIn from '../../services/cashIn.js';

test('cashIn expected result less then maxAmountCashIn', () => {
  const result = cashIn({ amount: 300, cashInPercents: 0.03, maxAmountCashIn: 5 });
  expect(result).toEqual(`${((300 * 0.03) / 100).toFixed(2)}`);
});

test('cashIn expected result more then maxAmountCashIn', () => {
  const result = cashIn({ amount: 111600, cashInPercents: 0.03, maxAmountCashIn: 5 });
  expect(result).toEqual(`${5.0.toFixed(2)}`);
});
