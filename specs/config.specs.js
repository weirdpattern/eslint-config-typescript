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
  it("samples does not throw errors without eslint-config-typescript", () => {
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
        "./specs/samples/typescript.ts"
      ],
      { encoding: "utf8" }
    );

    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(0);
  });

  it("samples throws errors with eslint-config-typescript", () => {
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
        "./specs/configs/typescript.js",
        "./specs/samples/typescript.ts"
      ],
      { encoding: "utf8" }
    );

    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(2);
    expect(output[0].messages[0].ruleId).toBe(
      "@typescript-eslint/no-unused-vars"
    );
    expect(output[0].messages[1].ruleId).toBe(
      "@typescript-eslint/type-annotation-spacing"
    );
  });

  it("returns configuration", () => {
    const config = require("../index");

    expect(config).toBeDefined();
    expect(config).toMatchInlineSnapshot(`
      Object {
        "overrides": Array [
          Object {
            "extends": Array [
              "eslint:recommended",
              "plugin:@typescript-eslint/eslint-recommended",
              "plugin:@typescript-eslint/recommended",
            ],
            "files": Array [
              "*.ts",
              "*.tsx",
            ],
          },
        ],
      }
    `);
  });
});
