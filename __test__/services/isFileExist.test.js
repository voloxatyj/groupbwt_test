import { stdout as output } from 'process';
import fs from 'fs';
import isFileExist from '../../services/isFileExist.js';

const asyncMock = jest.fn().mockRejectedValue(new Error('Async error message'));

describe('isFileExist', () => {
  it('should output text on terminal', () => {
    output.write('data', async (data) => {
    expect(data).toEqual('Checking if file input.json exist in root folder...\n');
    });
  });

  it('returns correct result', async () => {
    await expect(isFileExist()).resolves.toBe('Success');
  });
});
