import * as dotenv from 'dotenv';

dotenv.config();

const config = {};

config.app = process.env.APP || 'dev';
config.host = process.env.HOST || 'localhost';
config.port = process.env.PORT || '3000';

config.cashInAPI = process.env.CASHINAPI;
config.cashOutNaturalAPI = process.env.CASHOUTNATURALAPI;
config.cashOutLegalAPI = process.env.CASHOUTLEGALAPI;

export default config;
