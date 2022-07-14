import { test, expect } from '@jest/globals';
import { stdout as output } from 'process';
import start from '../../controllers/start.controller.js';

test('start is a function exists', () => {
  expect(typeof start).toEqual('function');
});

test('Testing output result', () => {
  output.on('data', async (data) => {
    const stdoutData = await JSON.parse(data.toString());
    expect(stdoutData).toEqual('Please, type a path');
  });
});
