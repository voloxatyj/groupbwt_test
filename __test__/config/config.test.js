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

  test('are string values (to avoid casting errors)', () => {
    Object.values(config).forEach((val) => expect(typeof val).toEqual('string'));
  });

  test('will receive process.env variables', () => {
    process.env.APP = 'dev';
    process.env.HOST = 'localhost';
    process.env.PORT = '3000';
    process.env.CASH_IN_API = 'https://private-2f0dd-paysera.apiary-mock.com/cash-in';
    process.env.CASH_OUT_NATURAL_API = 'https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural';
    process.env.CASH_OUT_LEGAL_API = 'https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical';
    process.env.PATH_TO_FILE = './input.json';

    expect(config.app).toEqual('dev');
    expect(config.host).toEqual('localhost');
    expect(config.port).toEqual('3000');
    expect(config.path).toEqual('./input.json');
    expect(config.cashInAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-in');
    expect(config.cashOutNaturalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural');
    expect(config.cashOutLegalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical');
  });
});
