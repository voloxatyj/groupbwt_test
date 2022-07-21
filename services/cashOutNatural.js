import rounding from './rounding.js';

// Count fee and output it for Cash Out operation and Natural type of person
export default function cashOutNatural({
  amount, date, user_id, cashOutNaturalPercents, weekLimitCashOutNatural, historyLimit,
}) {
  let history = [];
  let result = null;
  const user_exist = historyLimit.find((el) => el.user_id === user_id);
  if (!user_exist) {
    const limit = amount - weekLimitCashOutNatural > 0 ? (amount - weekLimitCashOutNatural) : (weekLimitCashOutNatural - amount);
    history = [...historyLimit, ({ user_id, date, limit: limit > weekLimitCashOutNatural ? 0 : limit })];
    if (limit || !user_exist) result = rounding(((limit < weekLimitCashOutNatural ? 0 : limit) * cashOutNaturalPercents) / 100);
  } else if (user_exist) {
    history = historyLimit.map((op) => {
      if (op.user_id === user_id) {
        const checkDate = (Date.parse(date) - Date.parse(op.date)) / (24 * 60 * 60 * 1000) / 7 > 1;
        if (!op.limit && !checkDate) {
          result = rounding((amount * cashOutNaturalPercents) / 100);
          return { ...op, date: checkDate ? date : op.date, limit: 0 };
        }
        op.limit = checkDate ? weekLimitCashOutNatural : op.limit;
        const limit = amount - op.limit > 0 ? (amount - op.limit) : (op.limit - amount);
        result = rounding(((amount - op.limit > 0 ? limit : 0) * cashOutNaturalPercents) / 100);
        return { ...op, date: checkDate ? date : op.date, limit: amount - op.limit > 0 ? 0 : limit };
      }
    });
  }

  return { history, result };
}
