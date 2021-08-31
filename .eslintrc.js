module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier',"plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope':'OFF',
    'react/jsx-uses-react': 'OFF',
    'react/prop-types':'OFF',
    'no-unused-vars':'OFF'
  }
}
