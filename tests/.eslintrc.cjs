const ignoreList =
  require('../.eslintrc.cjs').rules['import/no-unresolved'][1].ignore;

module.exports = {
  extends: ['../.eslintrc.cjs'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        // Add ava dev-dependency to ignore list.
        ignore: [...ignoreList, '^ava$'],
      },
    ],
  },
};
