"use strict";

const childProcess = require("child_process");

describe("config", () => {
  it("samples does not causes errors without eslint-config-typescript/prettier", () => {
    const result = childProcess.spawnSync(
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

  it("samples causes errors with eslint-config-typescript/prettier", () => {
    const result = childProcess.spawnSync(
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
    expect(output[0].messages.length).toBe(1);
  });

  it("returns all rules", () => {
    const config = require("../prettier");

    expect(config).toBeDefined();
    expect(config.extends).toContain("prettier");
    expect(config.extends).toContain("prettier/react");
    expect(config.plugins).toContain("prettier");
    expect(config.rules).toBeDefined();
    expect(config.rules["prettier/prettier"]).toBeDefined();
    expect(config.rules["prettier/prettier"][0]).toBe("error");
    expect(config.rules["prettier/prettier"][1]).toMatchObject({
      parser: "typescript"
    });
  });
});
