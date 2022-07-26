import rounding from './rounding.js';

export default function countFee(rest_of_amount, cashOutNaturalPercents) {
  return rounding((rest_of_amount * cashOutNaturalPercents) / 100);
}



