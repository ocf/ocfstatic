# OCF Static

A new website for the OCF.

## Development

```bash
# Getting set up
$ git clone --recursive
$ cd ocf
# If you already cloned the repo
$ git submodule update --init

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

## Berny's thoughts

### Why did I make this?

A whole set of reasons, primarily being:

- The site could look better, opstaff even suggested a new look
- The site (kinda) sucks on mobile.
- Django templating is hard to maintain.
- Tied ocfweb and documentation together in one repository.
- You cannot search the documentation.
- Staff hours is not displayed in a calendar.

Using opstaff's old Web Style and Redesign Guides, I implemented my take on what they envisioned at the start of fall 2018, almost a year ago. The goal is to make the website more extensible and maintainable, along with fixing everything above. Hopefully these changes move the OCF more toward microservices and involve more people into development on the website and through making our docs more accessible.

To address each of the previous points:

- A static site generator, Gridsome, Server Side Renders really fast websites. Stuff like lazy image loading and other cool features are built in.
- Built with a modern web framework, Vue, which is both extremely easy to learn and powerful with a large ecosystem (just see our imported packages, like the calendar.)
- Uses a modern pure css framework, Bulma. Handles mobile and widescreen issues while being very lightweight. Also is completely and easily customizable using SASS variables.
- The genius of Gridsome is the GraphQL data layer, unifying possibly very different data sources in once place. Remember, static website doesn't mean unchanging. You can hydrate components using the local file system, REST API from ocfweb, external APIs, etc.
- Now, adding documentation is easy. Add an markdown file or folder and the sidebar and routes will autogenerate the correct ways to get there when built.

While building the site, I've also realized that the docs themselves could be structured better as well. Some nested folders go too deep, and things aren't all categorized and organized to be found easily. Hopefully this also drives the docs to be fixed in that regard.

### Post initial feedback

After revealing this project to other staff, these were the main points I heard.

- The design looks pretty good. Doc search and visualized staff hours also good.
- Why are you using Javascript? (Specifically a JS framework like Vue)
- Our Django site is already pretty good! It doesn't depend on ANY javascript, and we do not want to replace it or change that.

So for new features like a paginated calendar and doc search, client-side javascript is necessary. Is Vue necessary? No. It's also was heavily emphasized that a JS-less site is required.

Given this feedback, I feel like I've been forced into choosing between the following options:

- Just improve our existing Django templates.

This would not be that hard, as to restyle our existing site all I would need to do is port over the designs here and utilize Bulma, essentially making only CSS and HTML changes. But kind of pointless without adding some JS for search and calendar, but doing so seems non-trivial.

- Embed Vue in our Django templates to replicate this site.

This can actually be done (see https://vsupalov.com/vue-js-in-django-template/), but this also has its own caveats, being that there isn't too much point to it since it's not longer for a SPA. Also is generally extremely confusing with the conflicting delimiters.

- Go full REST and SPA.

This would just require setting up endpoints in ocfweb. Now this site will have to fetch info from ocfweb on mount.

The best way that I feel like I can satisfy all ocfers and also keep the core of my project alive is the to keep both our existing templates and only add to ocfweb, by setting up new endpoints. This way, we can have a site with no JS, one with new JS functionality, so hopefully everyone is happy. Down the line though, things will need to change in ocfweb to separate docs out of it as well.

### Overall Feelings

Who knows if this will ever be adopted, but I hope that it at least forces some improvement in existing architecture, like improving ocfweb's API and separating docs out of ocfweb. If I can at least achieve those things, I think I will be satisfied. In a best case scenario, I can see potential for new things to developed on top of this and an authenticated ocfweb API.

## How to contribute

Read up on Gridsome docs to understand how things are put together, and how to utilize the data layer.

When styling, make sure to read up on Bulma styles, as to reuse as much implementation as possible. Most of the time if you want to center something, resize something, or color something, Bulma has a style for that.

Overall, just try to write as little css, js, and templating as possible. Make sure to utilize Vue slots & scoped-slots to avoid nesting components too hard.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use Vue hooks like `created`, instead use `mounted` to operate on the client side. Read https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
