# OCF Static

A new website for the OCF.

## Development

```bash
// Getting set up
$ git clone --recursive
$ cd ocf
// Or, if you already cloned the repo
$ git submodule update --init

$ npm install
// Run dev server
$ npm run dev
// Build
$ npm run build
// Lint
$ npm run lint
// View GraphQL schema
$ npm run explore
```

## Berny's thoughts

### Why did I make this?

A whole set of reasons, primarily being:

- The site could look better, opstaff even suggested a new look
- The site sucks on mobile.
- Django templating is hard to maintain.
- Tied ocfweb and documentation together in one repository.
- You cannot search the documentation.
- Staff hours is not displayed in a calendar.

Using opstaff's old Web Style and Redesign Guides, I implemented my take on what they envisioned at the start of fall 2018, almost a year ago. The goal is to make the website more extensible and maintainable, along with fixing everything above. Hopefully these changes move the OCF more toward microservices and involve more people into development on the website and through making our docs more accessible.

To address each of the previous points:

- A static site generator, Gridsome, Server Side Renders really fast websites.
- Built with a modern web framework, Vue, which is both extremely easy to learn and powerful with a large ecosystem (just see our imported packages, like the calendar.)
- Uses a modern pure css framework, Bulma. Handles mobile and widescreen issues while being very lightweight. Also is completely and easily customizable using SASS variables.
- The genius of Gridsome is the GraphQL data layer, unifying possibly very different data sources in once place. Remember, static website doesn't mean unchanging. You can hydrate components using the local file system, REST API from ocfweb, external APIs, etc.
- Now, adding documentation is easy. Add an markdown file or folder and the sidebar and routes will autogenerate the correct ways to get there when built.

While building the site, I've also realized that the docs themselves could be structured better as well. Some nested folders go too deep, and things aren't all categorized and organized to be found easily. Hopefully this also drives the docs to be fixed in that regard.

## How to contribute

Read up on Gridsome docs to understand how things are put together, and how to utilize the data layer.

When styling, make sure to read up on Bulma styles, as to reuse as much implementation as possible. Most of the time if you want to center something, resize something, or color something, Bulma has a style for that.

Overall, just try to write as little css, js, and templating as possible. Make sure to utilize Vue slots to avoid nesting components too hard and the existing file structure.

I hate complexity.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use Vue hooks like `created`, instead use `mounted` to operate on the client side. Read https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
