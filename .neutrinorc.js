module.exports = {
  use: [
    '@neutrinojs/react-components'
  ],
  env: {
    NODE_ENV: {
      development: {
        use: [['@neutrinojs/airbnb', {
          eslint: {
            "parser": "babel-eslint",
            "extends": [
              "standard",
              "eslint:recommended",
              "airbnb",
            ],
            "plugins": [
              "standard",
              "import",
              "promise",
              "react",
              "jsx-a11y"
            ],
            "settings": { "import/resolver": { "node": { "paths": ["./src"] } } },
            "env": {
              "es6": true,
              "browser": true,
              "node": true
            },
            "parserOptions": {
              "ecmaVersion": 2019,
              "sourceType": "module",
              "ecmaFeatures": {
                "jsx": true,
                "modules": true
              }
            },
            "rules": {
              "react/jsx-one-expression-per-line": 0,
              "react/prop-types": 0,
              "semi": 'off'
            }
          }
        }]]
      }
    }
  }
};
