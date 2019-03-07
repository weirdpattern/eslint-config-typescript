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
    "typescript/prettier",
    "typescript/prettier-react"
  ]
}
```

Note: `typescript/prettier-react` will automatically import `typescript/prettier`.

## Example configuration
Using default prettier configurations:
```json
{
  "extends": [
    "typescript",
    "typescript/prettier"    
  ],
  "plugins": ["filenames", "jest"],
  "env": {    
    "jest": true,
    "node": true
  },
  "rules": {
    "filenames/no-index": "error",
    "filenames/match-exported": ["error", "kebab"],
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error"
  }
}
```

Using specific react configurations:
```json
{
  "extends": [
    "typescript",
    "typescript/react",
    "typescript/prettier-react"
  ],
  "plugins": ["filenames", "jest"],
  "env": {    
    "jest": true,
    "node": true
  },
  "rules": {
    "filenames/no-index": "error",
    "filenames/match-exported": ["error", "kebab"],
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "tabWidth": 4,
        "singleQuote": true
      }
    ]
  }
}
```
