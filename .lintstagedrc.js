module.exports = {
  '*.{js,css,json,md}': ['prettier --write', 'git add'],
  '*.js': ['eslint --fix', 'git add'],
};
