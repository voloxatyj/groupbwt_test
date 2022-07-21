import { stdout as output } from 'process';
import commission from '../../controllers/commission.controller.js';

const data = [
  { date: "2016-02-15", user_id: 1, user_type: "natural", type: "cash_out", operation: { amount: 500.00, currency: "EUR" } },
	{ date: "2016-02-15", user_id: 1, user_type: "natural", type: "cash_out", operation: { amount: 1000.00, currency: "EUR" } },
	{ date: "2016-02-15", user_id: 1, user_type: "natural", type: "cash_out", operation: { amount: 100.00, currency: "EUR" } }];

describe('commission expected behavior', () => {
  it('checking correct output', async () => {
    const result = await commission({
      cashInPercents: 0.03,
      maxAmountCashIn: 5,
      cashOutNaturalPercents: 0.3,
      weekLimitCashOutNatural: 1000,
      cashOutLegalPercents: 0.3,
      minAmountCashOutLegal: 0.5,
      data});
    output.on('data', async (result) => {
      result.forEach((item) => {
        expect(item).toBeCalledWith(expect.any(String));
      })
    });
  });
})
