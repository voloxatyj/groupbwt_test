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
  // Add ID for transaction
  const inputData = [...data.map((com, idx) => ({ ...com, id: idx }))];
  let users = [];
  // Get transactions only for natural person and cash_out type
  let leftCommissions = [...inputData.filter((com) => com.type === 'cash_out' && com.user_type === 'natural')];

  // Itterate all transactions
  inputData.map((op) => {
    const {
      user_type: userType, type, operation: { amount }, date, user_id: userID, id,
    } = op;

    if (type === 'cash_in') {
      return cashIn({ cashInPercents, maxAmountCashIn, amount });
    }

    // Get user
    const user = users.find((u) => u.userID === userID);
    // Remove transaction that we already count fee
    leftCommissions = leftCommissions.filter((com) => com.id !== id);
    // Check if it the last operation of user
    const lastCommissionUser = leftCommissions.find((com) => com.user_id === userID);

    if (!lastCommissionUser && userType === 'natural') {
      return output.write('0.00\n');
    }

    if (user) {
      user.amount += amount;
    } else if (userType === 'natural') {
      users = [...users, { userID, date, amount }];
    }

    switch (userType) {
      case 'natural':
        cashOutNatural({
          amount, users, userID, date, cashOutNaturalPercents, weekLimitCashOutNatural,
        });
        break;
      case 'juridical':
        cashOutLegal({ amount, cashOutLegalPercents, minAmountCashOutLegal });
        break;
      default:
        break;
    }
  });
  process.kill(process.pid, 'SIGTERM');
}

export default commission;
