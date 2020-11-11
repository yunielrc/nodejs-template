module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'jsdoc',
    'jest'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'comma-dangle': 'off',
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
  },
};
