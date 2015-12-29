---
title: Comparison with Statinamic
---

Core features of a React-based static site generator:
* Use React components to define the structure of layouts & pages, including the root <html>...</html> layout.
* Author content using Markdown, with the ability to define arbitrary metadata (e.g. title, description) and specify a custom layout in which the content will be rendered.
* Directory-based routing: the path to a page matches its location on the file system.
* Static HTML files are generated for *every* route as part of the build step.
* Client-side routing is used once a page is loaded by the browser, for instant page transitions.
* Able to generate client-side links in both React components *and* Markdown pages.
* Able to extend with custom module loaders (e.g. for CoffeeScript or reStructuredText).
* Minimal API surface area: by default, little to no configuration should be required to get started, and extending/customizing behaviour should be simple and easy.
* Easy-to-use development mode: start a development server with a single command, with in-browser debugging support and sane error messages.
* Able to include arbitrary assets (e.g. robots.txt) in the generated static site.
* The production-ready static site is optimized for size: at a minimum, JS and CSS are minified.
* A sane default 404 page, and the ability to provide a custom one.
* A sane API to access all site data from within React components (e.g. to enumerate all pages and their metadata).


Bonus features:
* Hot module replacement: updating a component reloads only the changed component.
* Lazily-loaded modules (i.e. code splitting): the initial JS bundle is small; additional modules (e.g. other pages) are downloaded on-the-fly.
* Able to define custom path redirects.
* Able to serve site on a prefixed path (e.g. a GitHub pages project site).
* Able to define a custom path structure for pages based on their metadata, e.g. based on date: `/2015-12-29--some-blog-post`.
* Preconfigured project templates are defined for different use cases, e.g. documentation sites / blogs.
* Able to persist state between client-side page transitions, e.g. a menu open/close state.
* First-class support for localization.
* Support for generating [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(standard)) feeds.
* First-class support for GitHub pages: easily publish the static site with a single command.

## Features
+ Author content using Markdown
+

## Detractors
