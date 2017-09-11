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
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: Object.assign(
    {},
    {
      'prettier/prettier': [
        'error',
        Object.assign({}, { parser: 'typescript' })
      ]
    }
  )
};
