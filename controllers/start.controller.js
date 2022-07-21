import config from '../config/config.js';
import getConfigurationAPI from '../services/getConfigurationAPI.js';
import parseInputData from '../services/parseInputData.js';
import commission from './commission.controller.js';
import isFileExist from '../services/isFileExist.js';

async function start() {
  const { cashInAPI, cashOutNaturalAPI, cashOutLegalAPI } = config;
  const promises = [];
  promises.push(isFileExist());

  // parse json file
  promises.push(parseInputData());

  // Get configuration for CashIn from API
  promises.push(getConfigurationAPI(cashInAPI));

  // Get configuration for CashOut Natural Person from API
  promises.push(getConfigurationAPI(cashOutNaturalAPI));

  // Get configuration for CashOut Legal Person from API
  promises.push(getConfigurationAPI(cashOutLegalAPI));
  const [_, data,
    {data: { percents: cashInPercents, max: { amount: maxAmountCashIn } }},
    {data: { percents: cashOutNaturalPercents, week_limit: { amount: weekLimitCashOutNatural } }},
    {data: { percents: cashOutLegalPercents, min: { amount: minAmountCashOutLegal } }}] = await Promise.all(promises);

  // Starting to execute commissions on terminal
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
