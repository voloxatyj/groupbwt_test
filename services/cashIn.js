import rounding from './rounding.js';

// Count fee and output it for Cash In operation
export default function cashIn({ cashInPercents, maxAmountCashIn, amount }) {
  const fee = (amount * cashInPercents) / 100;
  const result = rounding(fee);
  if (result > maxAmountCashIn) return `${maxAmountCashIn.toFixed(2)}`;
  return `${result}`;
}
