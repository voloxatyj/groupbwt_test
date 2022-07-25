import { stdout as output } from 'process';
import cashIn from '../services/cashIn.js';
import cashOutLegal from '../services/cashOutLegal.js';
import cashOutNatural from '../services/cashOutNatural.js';

async function commission({
  cashInPercents,
  maxAmountCashIn,
  cashOutNaturalPercents,
  weekLimitCashOutNatural,
  cashOutLegalPercents,
  minAmountCashOutLegal,
  data,
}) {
  const results = [];
  let history = [];
  let historyLimit = [];
  let result = null;
  // Itterate all transactions
  data.map((op) => {
    const {
      user_type: userType, type, operation: { amount }, date, user_id,
    } = op;

    if (type === 'cash_in') {
      return results.push(cashIn({ cashInPercents, maxAmountCashIn, amount }));
    }

    if (userType === 'natural') {
      ({ history, result } = cashOutNatural({
        amount,
        cashOutNaturalPercents,
        date,
        user_id,
        weekLimitCashOutNatural,
        historyLimit,
      }));
      historyLimit = [...history];
      return results.push(result);
    }

    if (userType === 'juridical') {
      return results.push(cashOutLegal({
        amount, cashOutLegalPercents, minAmountCashOutLegal,
      }));
    }
  });
  results.forEach((res) => output.write(`${res}\n`));
  output.write('Counting commission finish successfully!\n');
}

export default commission;
