module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:react/recommended",
      "airbnb",
      "prettier",
      "plugin:react/jsx-runtime",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
      "no-param-reassign": 0,
      "react/forbid-prop-types": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "react/jsx-props-no-spreading": 0,
      "react/no-unstable-nested-components": 0,
      "prettier/prettier": 0,
      "no-console": "off"
    },
  };
  