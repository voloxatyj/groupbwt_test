import { stdout as output } from 'process';
import rounding from './rounding.js';

// Count fee and output it for Cash Out operation and Legal type of person
function cashOutLegal({ amount, cashOutLegalPercents, minAmountCashOutLegal }) {
  const fee = (amount * cashOutLegalPercents) / 100;
  const result = rounding(fee);
  output.write(result < minAmountCashOutLegal ? `${minAmountCashOutLegal.toFixed(2)}\n` : `${result}\n`);
}

export default cashOutLegal;
