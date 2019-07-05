# v3.0.0
[link](https://github.com/weirdpattern/eslint-config-typescript/compare/v2.0.0...v3.0.0)

This release contains **breaking changes**

* Update dependencies
* Introduce `overrides` in configurations that are exclusive to `typescript`
  * This requires an upgrade to eslint 6.0.0 to support `extends` in `overrides` 

# v2.0.0
[link](https://github.com/weirdpattern/eslint-config-typescript/compare/v1.1.0...v2.0.0)

This release contains **breaking changes**

* Move from manual configurations to `plugin:*/recommended`
* Split prettier configuration in two
  * prettier.js will hold prettier + typescript configurations
  * prettier-react.js will hold prettier + typescript + react configurations
* Update dependencies
* Remove prettier and react from peer-dependencies
  * The dependencies are still required when using prettier and react configurations, but these way at least the user won't get the warning.
  * This comes handy when working on typescript projects that don't use react.

# v1.1.0
[link](https://github.com/weirdpattern/eslint-config-typescript/compare/v1.0.2...v1.1.0)

* Simplified eslint configurations
* Simplified build configurations
* Add new typescript rules

# v1.0.2
[link](https://github.com/weirdpattern/eslint-config-typescript/compare/v1.0.1...v1.0.2)

* Update eslint configuration file for the repository
* Update use default prettier configuration
* Update remove prettier configuration file
* Lint code based on the new eslint configuration

# v1.0.1
[link](https://github.com/weirdpattern/eslint-config-typescript/compare/v1.0.0...v1.0.1)

* Chore lint code.
* Chore update README.md
* Update remove env specifics in typescript

# v1.0.0
Initial Release
