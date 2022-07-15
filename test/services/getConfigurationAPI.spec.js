import { test, expect, afterAll } from '@jest/globals';
import getConfigurationAPI from '../../services/getConfigurationAPI.js';
import config from '../../config/config.js';

const { cashInAPI, cashOutNaturalAPI, cashOutLegalAPI } = config;

test(`Check work of ${cashInAPI}`, async () => {
  const schema = {
    percents: 0.03,
    max: {
      amount: 5,
      currency: 'EUR',
    },
  };
  const data = await new Promise((resolve) => resolve(getConfigurationAPI(cashInAPI)));
  expect(data).toEqual(schema);
});

test(`Check work of ${cashOutNaturalAPI}`, async () => {
  const schema = {
    percents: 0.3,
    week_limit: {
      amount: 1000,
      currency: 'EUR',
    },
  };
  const data = await new Promise((resolve) => resolve(getConfigurationAPI(cashOutNaturalAPI)));
  expect(data).toEqual(schema);
});

test(`Check work of ${cashOutLegalAPI}`, async () => {
  const schema = {
    percents: 0.3,
    min: {
      amount: 0.5,
      currency: 'EUR',
    },
  };
  const data = await new Promise((resolve) => resolve(getConfigurationAPI(cashOutLegalAPI)));
  expect(data).toEqual(schema);
});
