import {
  describe, expect, test, beforeEach, afterEach,
} from '@jest/globals';
import config from '../../config/config.js';

describe('check environmental variables', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test('have default values', () => {
    expect(config).toMatchSnapshot();
  });

  test('are string values (to avoid casting errors)', () => {
    Object.values(config).forEach((val) => expect(typeof val).toEqual('string'));
  });

  test('will receive process.env variables', () => {
    process.env.APP = 'dev';
    process.env.HOST = 'localhost';
    process.env.PORT = '3000';
    process.env.cashInAPI = 'https://private-2f0dd-paysera.apiary-mock.com/cash-in';
    process.env.cashOutNaturalAPI = 'https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural';
    process.env.cashOutLegalAPI = 'https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical';

    expect(config.app).toEqual('dev');
    expect(config.host).toEqual('localhost');
    expect(config.port).toEqual('3000');
    expect(config.cashInAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-in');
    expect(config.cashOutNaturalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural');
    expect(config.cashOutLegalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical');
  });
});
