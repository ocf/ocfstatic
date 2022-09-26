# OCF Static

A new website for the OCF. Written in React with Gatsby, uses Chakra UI.

## Development

### Dependencies

- Node.js 16+ (https://nodejs.org/en/)
- If on M1 Mac, requires `vips` (can be installed through [Homebrew](https://brew.sh/) `brew install libvips`)

### Getting set up

```bash
# Clone the repository
$ git clone https://github.com/ocf/ocfstatic.git --branch gatsby-dev && cd ocfstatic
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
# Typecheck
$ yarn typecheck
# Autoformat
$ yarn format
```

### Developing with ocfapi locally

Create a file named .env.development with the following contents:

```
GATSBY_API_URL=http://localhost:8001 # or whatever port the API is on
```

This will redirect all API requests to that URL, if you want to revert to the production API just delete the file or comment out the line.

## How to contribute

Take a look at the issues, and take your pick!

I would recommend getting familiar with the Bulma styles included in the project, to reuse them and write as little custom css as possible.

## Possible pitfalls

Remember, you are writing server side rendered code. Don't use browser APIs such as anything on `window` except in a `useEffect` hook (and chances are, if you find yourself reaching for those APIs there's a better way of doing it!)
