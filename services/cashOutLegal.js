import rounding from './rounding.js';

// Count fee and output it for Cash Out operation and Legal type of person
export default function cashOutLegal({ amount, cashOutLegalPercents, minAmountCashOutLegal }) {
  const fee = (amount * cashOutLegalPercents) / 100;
  const result = rounding(fee);
  if (fee < minAmountCashOutLegal) return `${minAmountCashOutLegal.toFixed(2)}\n`;
  return `${result}`;
}
