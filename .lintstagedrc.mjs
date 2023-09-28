import { ESLint } from "eslint"

const eslint = new ESLint()

const asyncFilter = async (arr, pred) => {
  const kept = await Promise.all(arr.map(pred))
  return arr.filter((_v, index) => kept[index])
}

export default {
  "*.{m,c,}{j,t}s?(x)": async (files) => {
    const filtered = await asyncFilter(
      files,
      async (file) => !(await eslint.isPathIgnored(file)),
    )
    if (filtered.length === 0) {
      return []
    }
    return ["yarn eslint --cache --max-warnings=0 --fix " + filtered.join(" ")]
  },
  "*.ts?(x)": () => "yarn tsc --noEmit",
  "*.({j,t}s?(x)|md?(x)|json|y?(a)ml)": "yarn prettier --write",
  "yarn.lock": () => "yarn dedupe",
}
