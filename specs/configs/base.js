/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const eslint = require('../../src/eslint');

module.exports = {
  parser: 'typescript-eslint-parser',
  extends: ['eslint:recommended'],
  rules: Object.assign({}, eslint),
};
