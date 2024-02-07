module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    // semi: 'off',
    // 'linebreak-style': 'off',
    // 'arrow-parens': 'off',
    // 'comma-spacing': 'warn',
    // 'react/jsx-one-expression-per-line': 'warn',
    // 'quote-props': 'warn',

    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'warn',
    'spaced-comment': 'warn',
    'react/button-has-type': 'warn',
    // 'react/jsx-one-expression-per-line': 'warn',


    // 'react/jsx-no-useless-fragment': 'warn',
  },
}
