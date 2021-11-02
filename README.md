# OCF Static

A new website for the OCF.

## Development

```bash
# Getting set up
$ npm install
# Run dev server
$ npm run develop
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

**Gridsome hydration issues** are sneaky--everything works fine in develop mode but the production site won't go to the page when you click a link. Above all, this is caused by invalid or weird HTML. Some examples:

- HTML comments i.e. `<!-- -->` inside `<p>` tags in Vue templates. 
- Nested block elements, for example a `<p>` tag inside of a `<span>`
- Watch out for other HTML errors like nested `<a>` tags

Remember, you are writing server side rendered code. Don't use Vue hooks like `created`, instead use `mounted` to operate on the client side. Read https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
