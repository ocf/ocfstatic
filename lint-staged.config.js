module.exports = {
  "*.{j,t}s?(x)": "eslint --cache --max-warnings=0 --fix",
  "*.ts?(x)": () => "tsc --noEmit",
  "*.({j,t}s?(x)|md?(x)|json|y?(a)ml)": "prettier --write",
  "yarn.lock": () => "yarn dedupe",
}
