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
        '--no-ignore',
        '--config',
        './specs/configs/base.js',
        './specs/samples/typescript.ts'
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
        '--no-ignore',
        '--config',
        './specs/configs/typescript.js',
        './specs/samples/typescript.ts'
      ],
      { encoding: 'utf8' }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf('['))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(1);
  });

  it('returns all rules', () => {
    const config = require('../index');
    const utils = require('../src/utils');

    expect(config).toBeDefined();
    expect(config.parser).toBe('typescript-eslint-parser');
    expect(config.extends).toContain('eslint:recommended');
    expect(config.plugins).toContain('typescript');
    expect(config.rules).toMatchObject(
      Object.assign({}, utils.getESLintConfig(), {
        'typescript/no-namespace': [
          'error',
          {
            allowDeclarations: true
          }
        ],
        'typescript/no-use-before-define': 'error',
        'typescript/interface-name-prefix': 'error',
        'typescript/member-delimiter-style': 'error',
        'typescript/type-annotation-spacing': 'error',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/explicit-member-accessibility': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/member-ordering': [
          'error',
          {
            default: [
              'static-field',
              'private-field',
              'protected-field',
              'public-field',
              'constructor',
              'public-method',
              'protected-method',
              'private-method'
            ]
          }
        ]
      })
    );
  });
});
