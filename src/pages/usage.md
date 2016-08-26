---
layout: lib/layouts/Article
---

## Command line
Use the `nucleate` CLI to serve the site on a local web server during development, and to build the static site. To see all options, run:
```bash
node_modules/.bin/nucleate --help
```

### `nucleate serve`
Serve the site on a local web server, with live reloading as you edit files.

Usage:
```bash
node_modules/.bin/nucleate serve <source>
```
where `<source>` is the path to the root page of the site. For example:
```bash
node_modules/.bin/nucleate serve src/index.jsx

# If you pass a directory path, Nucleate will look for index.js or index.jsx
node_modules/.bin/nucleate serve src
```

Tip: define an `npm start` script in your package.json as a shortcut:
```json
{
  "scripts": {
    "start": "nucleate serve src"
  }
}
```

### `nucleate build`
Build the static site.

Usage:
```bash
node_modules/.bin/nucleate build <source> [destination=./build]
```
where `<source>` is the same as in `nucleate serve`, and `[destination]` is the directory where the static site should be written (default `./build`).

Tip: define an `npm run build` script in your package.json as a shortcut:
```json
{
  "scripts": {
    "build": "nucleate build src"
  }
}
```

## Creating pages
Each page is defined as a Node.js module which has named exports equivalent to the properties of a [react-router `PlainRoute`](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute). The root module specified as `<source>` on the command line becomes the root react-router route and should have a named export `component` which renders the root `<html>` element. For instance:

```jsx
// src/index.jsx

import React from 'react';

export const component = function Root({ children }) {
  return (
    <html>
      <head>
        <title>My site</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### Adding child routes
To add child routes, define a named export [`childRoutes`](https://github.com/reactjs/react-router/blob/master/docs/API.md#childroutes) or [`getChildRoutes`](https://github.com/reactjs/react-router/blob/master/docs/API.md#getchildroutespartialnextstate-callback) as follows:
```jsx
// src/index.jsx

export const getIndexRoute = includeRoute(require('route!./pages/'));
export const getChildRoutes = includeRoutes(require.context('route!./pages/', false));
```

### React

### Markdown



## Querying pages

## CSS

## Raw files

## Custom loaders
