import cashOutLegal from '../../services/cashOutLegal.js';

test('cashOutLegal expected result if fee more than minAmountCashOutLegal', () => {
  const result = cashOutLegal({ amount: 300, cashOutLegalPercents: 0.3, minAmountCashOutLegal: 0.5 });
  expect(result).toEqual(`${((300 * 0.3) / 100).toFixed(2)}`);
});

test('cashOutLegal expected result if fee less than minAmountCashOutLegal', () => {
  const result = cashOutLegal({ amount: 100, cashOutLegalPercents: 0.3, minAmountCashOutLegal: 0.5 });
  expect(+result).toEqual(0.50);
});
