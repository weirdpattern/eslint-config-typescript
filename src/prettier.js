/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const config = require('cosmiconfig');
const eslint = require('./eslint');

const explorer = config('prettier', {
  sync: true,
  argv: false,
  rcExtensions: true,
});

let prettierrc;

try {
  prettierrc = explorer.load(process.cwd());
  if (prettierrc != null) {
    prettierrc = prettierrc.config;
  }
} catch (ex) {
  prettierrc = {};
}

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: Object.assign({}, eslint, {
    'prettier/prettier': [
      'error',
      Object.assign({}, prettierrc, { parser: 'typescript' }),
    ],
  }),
};
