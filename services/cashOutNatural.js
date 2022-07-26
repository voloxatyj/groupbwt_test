import checkLimitAmount from "../helpers/checkLimitAmount.js";
import countFee from "../helpers/countFee.js";
import checkDate from "../helpers/checkDate.js";

// Count fee for Cash Out operation and Natural type of person
export default function cashOutNatural({
  amount, date, user_id, cashOutNaturalPercents, weekLimitCashOutNatural, historyLimit,
}) {
  let history = [];
  let result = null;
  const user_exist = historyLimit.find((user) => user.user_id === user_id);
  if (!user_exist) {
    const { limit, rest_of_amount } = checkLimitAmount(amount, weekLimitCashOutNatural);
    history = [...historyLimit, ({ user_id, date, limit })];
    result = countFee(rest_of_amount, cashOutNaturalPercents);  
  } else if (user_exist) {
    history = historyLimit.map((operation) => {
      if (operation.user_id === user_id) {
        const { week_condition } = checkDate(date, operation.date);
        operation.limit = week_condition ? weekLimitCashOutNatural : operation.limit;
        const { limit, rest_of_amount } = checkLimitAmount(amount, operation.limit);
        result = countFee(rest_of_amount, cashOutNaturalPercents);  
        if (!week_condition) {
          return { ...operation, limit };
        }
        return { ...operation, date, limit };
      }
      return { ...operation };
    });
  }
  return { history, result };
}

