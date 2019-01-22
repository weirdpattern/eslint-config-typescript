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
  it("samples does not throw errors without eslint-config-typescript/react", () => {
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
        "./specs/samples/react.tsx"
      ],
      { encoding: "utf8" }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(0);
  });

  it("samples throws errors with eslint-config-typescript/react", () => {
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
        "./specs/configs/react.js",
        "./specs/samples/react.tsx"
      ],
      { encoding: "utf8" }
    );
    const output = JSON.parse(
      result.stdout.substring(result.stdout.indexOf("["))
    );

    expect(output.length).toBe(1);
    expect(output[0].messages.length).toBe(3);
    expect(output[0].messages[0].ruleId).toBe("react/display-name");
    expect(output[0].messages[1].ruleId).toBe("react/no-is-mounted");
    expect(output[0].messages[2].ruleId).toBe("react/react-in-jsx-scope");
  });

  it("returns configuration", () => {
    const config = require("../react");

    expect(config).toBeDefined();
    expect(config.extends).toContain("plugin:react/recommended");
  });
});
