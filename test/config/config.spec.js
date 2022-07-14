import { describe, expect, test, beforeEach, afterEach } from '@jest/globals';
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
    process.env.app = 'dev';
    process.env.host = 'localhost';
    process.env.port = '3000';

    expect(config.app).toEqual('dev');
    expect(config.host).toEqual('localhost');
    expect(config.port).toEqual('3000');
  });
});
