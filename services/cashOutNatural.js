import { stdout as output } from 'process';

// Count fee
const fee = ({ amount, cashOutNaturalPercents }) => ((amount * cashOutNaturalPercents) / 100).toFixed(2);

// Count fee and output it for Cash Out operation and Natural type of person
function cashOutNatural({
  amount, users, userID, date, cashOutNaturalPercents, weekLimitCashOutNatural,
}) {
  // Get date and amount of user to check
  const { amount: userAmount, date: firstDate } = users.find((u) => u.userID === userID);
  // Check how much days passed
  const conditionOfWeekTime = (Date.parse(date) - Date.parse(firstDate)) / (24 * 60 * 60 * 1000);

  // Check if not pass a week and user not cashout already more then 1000
  if (conditionOfWeekTime <= 7 && userAmount < weekLimitCashOutNatural) {
    return output.write('0.00\n');
  }

  // Check if not pass a week and amount greater 1000
  if (conditionOfWeekTime <= 7 && amount > weekLimitCashOutNatural) {
    return output.write(`${fee({ amount: amount - weekLimitCashOutNatural, cashOutNaturalPercents })}\n`);
  }

  return output.write(`${fee({ amount, cashOutNaturalPercents })}\n`);
}

export default cashOutNatural;
