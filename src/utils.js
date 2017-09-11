/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const config = require('cosmiconfig');

module.exports = {
  /**
   * Gets the ESLint overridden eslint:recommended + others rules.
   * @returns {Object}
   *    The ESLint overridden eslint:recommended + others rules.
   */
  getESLintConfig() {
    return {
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
            Boolean: 'boolean',
            Number: 'number',
            Object: 'object',
            String: 'string',
            return: 'returns'
          },
          requireReturnType: true,
          requireParamDescription: true,
          requireReturnDescription: true
        }
      ],
      quotes: ['error', 'single', { avoidEscape: true }]
    };
  }
};
