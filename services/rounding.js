// Round number in example 0.023 to 0.03
function rounding(fee) {
  if (fee % 1) {
    const num = `${fee}`.split('.');
    if (num[1][2] > 1) {
      const roundNum = num[1].split('');
      const newVal = +roundNum[1] + 1;
      return +`${num[0]}.${roundNum[0]}${newVal}`;
    }
  }
  return fee.toFixed(2);
}

export default rounding;
