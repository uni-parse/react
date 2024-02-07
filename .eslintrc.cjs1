module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        "react/react-in-jsx-scope": 0,
        'react/prop-types': ['off']
    }
}
