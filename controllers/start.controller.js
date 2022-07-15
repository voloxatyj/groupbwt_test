import config from '../config/config.js';
import getConfigurationAPI from '../services/getConfigurationAPI.js';
import parseInputData from '../services/parseInputData.js';
import commission from './commission.controller.js';
import getPath from '../services/getPath.js';

async function start() {
  const path = await getPath();
  // parse json file
  const data = await parseInputData(path);
  const { cashInAPI, cashOutNaturalAPI, cashOutLegalAPI } = config;
  // Get configuration for CashIn from API
  const {
    percents: cashInPercents,
    max: { amount: maxAmountCashIn },
  } = await getConfigurationAPI(cashInAPI);
  // Get configuration for CashOut Natural Person from API
  const {
    percents: cashOutNaturalPercents,
    week_limit: { amount: weekLimitCashOutNatural },
  } = await getConfigurationAPI(cashOutNaturalAPI);
  // Get configuration for CashOut Legal Person from API
  const {
    percents: cashOutLegalPercents,
    min: { amount: minAmountCashOutLegal },
  } = await getConfigurationAPI(cashOutLegalAPI);
  // starting to execute commissions on terminal
  await commission({
    cashInPercents,
    maxAmountCashIn,
    cashOutNaturalPercents,
    weekLimitCashOutNatural,
    cashOutLegalPercents,
    minAmountCashOutLegal,
    data,
  });
}

export default start;
