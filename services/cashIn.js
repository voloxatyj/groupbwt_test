import { stdout as output } from 'process';

// Count fee and output it for Cash In operation
function cashIn(amount) {
  const fee = ((amount * 0.03) / 100).toFixed(2);
  output.write(fee > 5 ? '5.00\n' : `${fee}\n`);
  return fee;
}

export default cashIn;
