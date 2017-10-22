module.exports = {
  env: {
    jest: true,
    browser: true
  },

  extends: 'jnmorse',

  rules: {
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.js,', 'webpack.*.js']
    }]
  }
}
