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

Take a look at the issues, and take your pick!

I would recommend getting familiar with the Bulma styles included in the project, to reuse them and write as little custom css as possible.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use Vue hooks like `created`, instead use `mounted` to operate on the client side. Read https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
