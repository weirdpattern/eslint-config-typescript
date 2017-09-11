/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const utils = require('./utils');

module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  plugins: ['typescript'],
  rules: Object.assign({}, utils.getESLintConfig(), {
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
};
