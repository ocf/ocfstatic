# OCF Static

A new website for the OCF.

## Development

```bash
# Getting set up
$ npm install
# Run dev server
$ npm run dev
# Build
$ npm run build
# Lint
$ npm run lint
# View GraphQL schema
$ npm run explore
```

## How to contribute

Read up on Gridsome docs to understand how things are put together, and how to utilize the data layer.

When styling, make sure to read up on Bulma styles, as to reuse as much implementation as possible. Most of the time if you want to center something, resize something, or color something, Bulma has a style for that.

Overall, just try to write as little css, js, and templating as possible. Make sure to utilize Vue slots & scoped-slots to avoid nesting components too hard.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use Vue hooks like `created`, instead use `mounted` to operate on the client side. Read https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
