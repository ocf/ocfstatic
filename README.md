# OCF Static

A new website for the OCF. Written in React with Gatsby, uses Chakra UI.

## Development

### Dependencies

- Node.js 16+ (https://nodejs.org/en/)
- If on M1 Mac, requires `vips` (can be installed through [Homebrew](https://brew.sh/) `brew install libvips`)

### Getting set up

```bash
# Clone the repository
$ git clone https://github.com/ocf/ocfstatic.git && cd ocfstatic
# Install all of our dependencies
$ corepack enable
$ yarn
# Run dev server (visit http://localhost:8080 to view)
$ yarn develop
```

### Extras

```bash
# Build
$ yarn build
# Lint
$ yarn lint
# View GraphQL schema
$ yarn explore
```

## How to contribute

Take a look at the issues, and take your pick!

I would recommend getting familiar with the Bulma styles included in the project, to reuse them and write as little custom css as possible.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use browser APIs such as anything on `window` except in a `useEffect` hook (and chances are, if you find yourself reaching for those APIs there's a better way of doing it!)
