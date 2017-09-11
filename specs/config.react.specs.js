'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

describe('config', () => {
  it('samples does not causes errors without eslint-config-typescript/react', () => {
    const result = childProcess.spawnSync(
      'npm',
      [
        'run',
        'test:spec',
        '--silent',
        '--',
        '--no-ignore',
        '--config',
        './specs/configs/base.js',
        './specs/samples/react.tsx'
      ],
      { encoding: 'utf8' }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf('['))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(0);
  });

  it('samples causes errors with eslint-config-typescript/react', () => {
    const result = childProcess.spawnSync(
      'npm',
      [
        'run',
        'test:spec',
        '--silent',
        '--',
        '--no-ignore',
        '--config',
        './specs/configs/react.js',
        './specs/samples/react.tsx'
      ],
      { encoding: 'utf8' }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf('['))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(3);
  });

  it('returns all rules', () => {
    const config = require('../react');

    expect(config).toBeDefined();
    expect(config.extends).toContain('plugin:react/recommended');
    expect(config.plugins).toContain('react');
  });
});
