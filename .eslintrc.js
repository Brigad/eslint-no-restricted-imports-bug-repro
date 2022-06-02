const RESTRICTED_IMPORTS = ["some", "things"];

module.exports = {
  // Comment this property
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
  },
  env: {
    es2021: true,
  },
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: RESTRICTED_IMPORTS,
      },
    ],
  },
  overrides: [
    // Comment this block
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
    {
      files: ["**/packages/service-web/**/*.js"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: RESTRICTED_IMPORTS,
            patterns: ["*.ios", "*.android", "*.native"],
          },
        ],
      },
    },
    {
      files: ["**/packages/service-native/**/*.js"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: RESTRICTED_IMPORTS,
            patterns: ["*.web"],
          },
        ],
      },
    },
  ],
};
