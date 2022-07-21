import * as dotenv from 'dotenv';

dotenv.config();

const config = {};

config.app = process.env.APP || 'dev';
config.host = process.env.HOST || 'localhost';
config.port = process.env.PORT || '3000';
config.path = process.env.PATH_TO_FILE || './input.json';

config.cashInAPI = process.env.CASH_IN_API;
config.cashOutNaturalAPI = process.env.CASH_OUT_NATURAL_API;
config.cashOutLegalAPI = process.env.CASH_OUT_LEGAL_API;

export default config;
