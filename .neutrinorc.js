// const eslint = require('./.eslintrc');

module.exports = {
  use: [
    '@neutrinojs/react-components'
  ],
  env: {
    NODE_ENV: {
      development: {
        use: [['@neutrinojs/airbnb', { eslint: { useEslintrc: true } }]]
      }
    }
  }
};
