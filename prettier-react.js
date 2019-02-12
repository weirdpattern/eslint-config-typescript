/**
 * Copyright (c) 2019, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable filenames/match-exported */

"use strict";

const configuration = require("./src/prettier");
configuration.extends.push("prettier/react");

module.exports = configuration;

/* eslint-enable filenames/match-exported */
