'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

describe('config', () => {
  it('samples does not causes errors without eslint-config-typescript', () => {
    const result = childProcess.spawnSync(
      'npm',
      [
        'run',
        'test:spec',
        '--silent',
        '--',
        '--config',
        './specs/configs/base.js',
        './specs/samples/typescript.ts',
      ],
      { encoding: 'utf8' }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf('['))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(0);
  });

  it('samples causes errors with eslint-config-typescript', () => {
    const result = childProcess.spawnSync(
      'npm',
      [
        'run',
        'test:spec',
        '--silent',
        '--',
        '--config',
        './specs/configs/typescript.js',
        './specs/samples/typescript.ts',
      ],
      { encoding: 'utf8' }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf('['))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(1);
  });
});
