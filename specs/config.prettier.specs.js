/**
 * Copyright (c) 2019, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const spawn = require("cross-spawn");

describe("config", () => {
  it("samples does not throw errors without eslint-config-typescript/prettier", () => {
    const result = spawn.sync(
      "npm",
      [
        "run",
        "test:spec",
        "--silent",
        "--",
        "--no-ignore",
        "--no-eslintrc",
        "--config",
        "./specs/configs/base.js",
        "./specs/samples/prettier.ts"
      ],
      { encoding: "utf8" }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(0);
  });

  it("samples throws errors with eslint-config-typescript/prettier", () => {
    const result = spawn.sync(
      "npm",
      [
        "run",
        "test:spec",
        "--silent",
        "--",
        "--no-ignore",
        "--no-eslintrc",
        "--config",
        "./specs/configs/prettier.js",
        "./specs/samples/prettier.ts"
      ],
      { encoding: "utf8" }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(2);
    expect(output[0].messages[0].message).toBe(
      "Replace `'one'` with `\"one\"`"
    );
    expect(output[0].messages[1].message).toBe("Insert `;`");
  });

  it("returns configuration", () => {
    const config = require("../prettier");

    expect(config).toBeDefined();
    expect(config.extends).toContain("plugin:prettier/recommended");
    expect(config.extends).toContain("prettier/typescript");
  });
});
