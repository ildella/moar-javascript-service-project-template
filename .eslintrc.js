module.exports = {
  extends: [
    'node-moar',
  ],
  plugins: [
    'jest',
    'fp',
    'unicorn',
  ],
  overrides: [
    {
      files: ['**/src/**'],
      extends: [
        'node-moar-stricter',
      ],
    },
    {
      files: [
        '**/tests/**',
        '.eslintrc.js',
        'jest.config.js',
        'jest.config.*.js',
      ],
      extends: [
        'node-moar-test',
      ],
    },
  ],
}
