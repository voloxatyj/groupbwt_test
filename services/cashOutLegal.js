import { stdout as output } from 'process';

// Count fee and output it for Cash Out operation and Legal type of person
function cashOutLegal({ amount, cashOutLegalPercents, minAmountCashOutLegal }) {
  const fee = ((amount * cashOutLegalPercents) / 100).toFixed(2);
  output.write(fee < minAmountCashOutLegal ? `${minAmountCashOutLegal.toFixed(2)}\n` : `${fee}\n`);
}

export default cashOutLegal;
