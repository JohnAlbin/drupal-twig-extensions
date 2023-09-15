module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['unused-imports'],
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 13,
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        // Ignore internal import paths that start with #.
        ignore: ['^#'],
      },
    ],
    'import/no-unused-modules': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'index',
          'sibling',
        ],
      },
    ],
    'import/prefer-default-export': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
};
