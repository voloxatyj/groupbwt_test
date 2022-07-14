import { stdout as output } from 'process';

// Count fee and output it for Cash Out operation and Legal type of person
function cashOutLegal(amount) {
  const fee = ((amount * 0.3) / 100).toFixed(2);
  output.write(fee > 0.5 ? '0.50\n' : `${fee}\n`);
  return fee;
}

export default cashOutLegal;
