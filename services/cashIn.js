import { stdout as output } from 'process';
import rounding from './rounding.js';

// Count fee and output it for Cash In operation
function cashIn({ cashInPercents, maxAmountCashIn, amount }) {
  const fee = (amount * cashInPercents) / 100;
  const result = rounding(fee);
  output.write(result > maxAmountCashIn ? `${maxAmountCashIn.toFixed(2)}\n` : `${result}\n`);
}

export default cashIn;
