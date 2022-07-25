import isFileExist from '../../services/isFileExist.js';

const asyncMock = jest.fn().mockRejectedValue(new Error('Async error message'));

describe('isFileExist', () => {
  it('returns correct result', async () => {
    await expect(isFileExist()).resolves.toBe('Success');
  });
});
