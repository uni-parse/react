module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
        'prettier'
    ],
    rules: {
        "react/react-in-jsx-scope": 1,
    }
}
