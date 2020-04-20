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

// {
//   "env": {
//     "browser": true,
//     "commonjs": true,
//     "es6": true
//   },
//   "extends": "eslint:recommended",
//   "globals": {
//     "Atomics": "readonly",
//     "SharedArrayBuffer": "readonly"
//   },
//   "parserOptions": {
//     "ecmaVersion": 2018,
//     "sourceType": "module"
//   },
//   "rules": {
//     "indent": ["error", 4],
//     "linebreak-style": ["error", "unix"],
//     "quotes": ["error", "double"],
//     "semi": ["error", "always"]
//   }
// }
