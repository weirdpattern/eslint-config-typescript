/**
 * Copyright (c) 2019, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

module.exports = {
  extends: ["plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["prettier/@typescript-eslint"]
    }
  ]
};
