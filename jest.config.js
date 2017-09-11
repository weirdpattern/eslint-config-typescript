/**
 * Copyright (c) 2017, WeirdPattern
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: [
    '<rootDir>/specs/*[.-][Ss]pec[s]?.{j,t}s{,x}',
    '<rootDir>/specs/**/*[.-][Ss]pec[s]?.{j,t}s{,x}'
  ],
  rootDir: '.',
  verbose: false,
  resetMocks: true,
  resetModules: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '{index,prettier,react}.{j,t}s{,x}',
    'src/*.{j,t}s{,x}',
    '!**/*.min.js',
    '!**/static/**',
    '!**/specs/**',
    '!**/node_modules/**'
  ]
};
