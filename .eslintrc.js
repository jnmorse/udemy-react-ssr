module.exports = {
  env: {
    jest: true,
    browser: true
  },

  extends: 'jnmorse',

  rules: {
    'react/static-property-placement': ['warn', 'static public field']
  }
};
