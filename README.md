# eslint-config-typescript
An opinionated set of ESLint rules for TypeScript projects

## Installation
Install eslint-config-typescript:

```bash
$ npm install --save-dev eslint-config-typescript
```

Then, add eslint-config-typescript to the "extends" array in your ESLint file. 
Make sure to put it last, so it gets the chance to override other configs.

```json
{
  "extends": [
    "typescript"
  ]
}
```

A few ESLint plugins are supported as well:
```json
{
  "extends": [
    "typescript",
    "typescript/react",
    "typescript/prettier"
  ]
}
```

## Example configuration
```json
{
  "extends": [
    "typescript",
    "typescript/react",
    "typescript/prettier"
  ],
  "plugins": [
    "typescript"
  ],
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "node": true
  }
}
```
