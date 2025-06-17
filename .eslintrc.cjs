const config = require('@lobehub/lint').eslint;

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'sort-keys-fix/sort-keys-fix': 'off',
  },
};
