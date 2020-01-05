module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    "rules": {
      "no-console": "off"
    },
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
