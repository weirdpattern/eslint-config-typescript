/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'filenames'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    semi: 'error',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'require-jsdoc': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    'valid-jsdoc': [
      'error',
      {
        preferType: {
          any: '*',
          object: 'Object'
        },
        requireReturnType: true,
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'filenames/match-exported': ['error', 'kebab'],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        parser: 'typescript'
      }
    ]
  }
};
