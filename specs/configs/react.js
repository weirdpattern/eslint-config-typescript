/**
 * Copyright (c) 2019, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

module.exports = Object.assign({}, require("../../react"), {
  parser: "@typescript-eslint/parser",
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  }
});
