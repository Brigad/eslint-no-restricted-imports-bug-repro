# Bug reproduction for an "overrides" problem

## Setup

```
yarn
```

## Reproduction

```
yarn eslint .
```

## Description

With a combination of configurations, some "overrides" are not matched.

## Explanation

The combination of:

1. `root: true` in .eslintrc.js

```
root: true,
```

or

2. a rule targeting specific files (at the root or in "overrides"):

```
"no-restricted-imports": [
  "error",
  {
    paths: RESTRICTED_IMPORTS,
  },
],
```

/

```
{
  files: ["*.js"],
  parser: "@babel/eslint-parser",
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: RESTRICTED_IMPORTS,
      },
    ],
  },
},
```

AND

3. a `.eslintrc.js` file in a subfolder

```
const { join } = require("path");

module.exports = {
  extends: join(__dirname, "../../.eslintrc.js"),
};
```

=>

Causes other "overrides" rules to not be matched.

## Workaround

In this reproduction, to see the errors reported correctly, we need to either:

- delete `packages/service-web/.eslintrc.js`
  or
- comment `root: true` and rules at the root and in the `*.js` overrides
