module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  rules: {
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "class-methods-use-this": "off"
  },
  parserOptions: {
    sourceType: 'module',
    "ecmaVersion": 2018,
  }
};
