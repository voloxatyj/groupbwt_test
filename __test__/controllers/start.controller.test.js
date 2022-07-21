import config from '../../config/config.js';

test('start expected behavior', async () => {  
  expect(config.cashInAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-in');
  expect(config.cashOutNaturalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-natural');
  expect(config.cashOutLegalAPI).toEqual('https://private-2f0dd-paysera.apiary-mock.com/cash-out-juridical');
});