import rounding from './rounding.js';

// Count fee for Cash Out operation and Natural type of person
export default function cashOutNatural({
  amount, date, user_id, cashOutNaturalPercents, weekLimitCashOutNatural, historyLimit,
}) {
  let history = [];
  let result = null;
  const user_exist = historyLimit.find((el) => el.user_id === user_id);
  if (!user_exist) {
    const { limit, rest_of_amount } = checkLimitAmount(amount, weekLimitCashOutNatural);
    history = [...historyLimit, ({ user_id, date, limit })];
    result = countFee(rest_of_amount, cashOutNaturalPercents);  
  } else if (user_exist) {
    history = historyLimit.map((op) => {
      if (op.user_id === user_id) {
        const { week_condition } = checkDate(date, op.date);
        op.limit = week_condition ? weekLimitCashOutNatural : op.limit;
        const { limit, rest_of_amount } = checkLimitAmount(amount, op.limit);
        result = countFee(rest_of_amount, cashOutNaturalPercents);  
        if (!week_condition) {
          return { ...op, limit };
        }
        return { ...op, date: week_condition ? date : operation.date, limit };
      }
    });
  }
  return { history, result };
}

const countFee = (rest_of_amount, cashOutNaturalPercents) => {
  return rounding((rest_of_amount * cashOutNaturalPercents) / 100);
}

const checkLimitAmount = (amount, limit) => {
  const condition = amount - limit > 0;
  return { limit: condition ?  0 : limit - amount , rest_of_amount: condition ? amount - limit : 0};
}

const checkDate = (first_date, operation_date) => {
  const week_condition = (Date.parse(first_date) - Date.parse(operation_date)) / (24 * 60 * 60 * 1000) / 7 > 1;
  return { week_condition };
}