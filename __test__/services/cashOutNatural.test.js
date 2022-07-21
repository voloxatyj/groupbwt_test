import cashOutNatural from '../../services/cashOutNatural.js';

describe('cashOutNatural', () => {
  it('cashOutNatural expected result if it\'s one transaction', async () => {
    const { history, result } = await cashOutNatural({
      amount: 400,
      date: '2016-01-06',
      user_id: 1,
      cashOutNaturalPercents: 0.3,
      weekLimitCashOutNatural: 1000,
      historyLimit: []
    });
    
    expect(history).toEqual(expect.arrayContaining([expect.objectContaining({ user_id: 1, date: '2016-01-06', limit: 600 })]));
    expect(result).toEqual('0.00');
  });

  it('cashOutNatural expected result if it\'s one user with couple transaction', async () => {
    const { history, result } = await cashOutNatural({
      amount: 400,
      date: '2016-01-06',
      user_id: 1,
      cashOutNaturalPercents: 0.3,
      weekLimitCashOutNatural: 1000,
      historyLimit: [{ user_id: 1, date: '2016-01-06', limit: 600 }, { user_id: 1, date: '2016-01-06', limit: 0 }]
    });
    
    expect(history).toEqual(expect.arrayContaining([expect.objectContaining({ user_id: 1, date: '2016-01-06', limit: 0 })]));
    expect(result).toEqual('1.20');
  });
});
