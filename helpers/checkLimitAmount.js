export default function checkLimitAmount(amount, limit) {
  const condition = amount - limit > 0;
  return { limit: condition ?  0 : limit - amount , rest_of_amount: condition ? amount - limit : 0};
}