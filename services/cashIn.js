import { stdout as output } from 'process';

// Count fee and output it for Cash In operation
function cashIn({ cashInPercents, maxAmountCashIn, amount }) {
  const fee = ((amount * cashInPercents) / 100).toFixed(2);
  output.write(fee > maxAmountCashIn ? `${maxAmountCashIn.toFixed(2)}\n` : `${fee}\n`);
}

export default cashIn;
