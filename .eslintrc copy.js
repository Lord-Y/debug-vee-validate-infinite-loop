module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
};
