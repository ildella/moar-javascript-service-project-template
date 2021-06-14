module.exports = {
  // env: {
  //   es6: true, // ES6 globals + ES6 syntax
  //   node: true,
  // },
  // parserOptions: {
  //   ecmaVersion: 2020, // ES6 syntax only
  //   ecmaFeatures: {
  //     impliedStrict: true,
  //   },
  // },
  extends: [
    'node-opinionated',
    'plugin:jest/recommended',
    // 'plugin:promise/recommended',
  ],
  plugins: [
    'jest',
    // 'fp',
    // 'promise',
    // 'unicorn',
  ],
  overrides: [
    {
      files: ['**/src/**', '**'],
      extends: [
        // 'plugin:unicorn/recommended',
        // 'plugin:fp/recommended',
      ],
      rules: {
        // 'fp/no-unused-expression': 'off',
        // 'fp/no-nil': 'off',
        // 'fp/no-let': 'warn',
        // 'fp/no-mutation': ['error', {
        //   'commonjs': true,
        //   'allowThis': true,
        //   'exceptions': [],
        // }],
        // 'unicorn/escape-case': 'warn',
        // 'unicorn/import-style': 'off',
        // // 'unicorn/no-array-for-each': 'off',
        // // 'unicorn/no-array-reduce': 'warn',
        // // 'unicorn/no-array-callback-reference': 'off',
        // 'unicorn/no-fn-reference-in-iterator': 'off',
        // 'unicorn/no-null': 'warn',
        // 'unicorn/no-process-exit': 'off', // eslint already has it
        // 'unicorn/prefer-module': 'off',
        // 'unicorn/prevent-abbreviations': 'warn',
      },
    },
    {
      files: ['**/tests/**', '**/fixtures/**', '**/runners/**'],
      rules: {
        'max-nested-callbacks': ['warn', 3],
        'max-lines': ['warn', 200],
        'no-console': 'off',
        'no-sync': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-extraneous-require': 'off',
        'jest/expect-expect': 'off',
        // 'jest/no-test-callback': 'off',
        'jest/no-done-callback': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
}
