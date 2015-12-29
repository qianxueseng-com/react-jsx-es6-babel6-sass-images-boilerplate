module.exports = {
  env: {
    browser: true
  },
  extends: 'google',
  plugins: [
    'react'
  ],
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    'react/display-name': 1,
    'react/sort-comp': 1
  }
};
