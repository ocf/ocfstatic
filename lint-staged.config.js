module.exports = {
  "*.ts?(x)": "yarn eslint --cache --max-warnings=0 --fix",
  "*.ts?(x)": () => "yarn tsc --noEmit",
  "*.({j,t}s?(x)|md?(x)|json|y?(a)ml)": "yarn prettier --write",
  "yarn.lock": () => "yarn dedupe",
}
