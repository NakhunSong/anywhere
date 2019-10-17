module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    }
  },
  plugins: ["react"],
  extends: ["airbnb"],
  rules: {
    "no-undef": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "react/forbid-prop-types": 0,
  }
};