---
layout: lib/layouts/Article
title: Getting Started
---

>Nucleation is the first step in the formation of either a new thermodynamic phase or a new structure via self-assembly or self-organization.
>
> &mdash; <cite>[Wikipedia](https://en.wikipedia.org/wiki/Nucleation)</cite>

Nucleate is a static site generator powered by [React][] and [webpack][].

Like [other static site generators](~/comparison), it makes creating static websites easier and faster than plain HTML and CSS. With Nucleate, you create the pages of your site as React components, allowing you to easily reuse layouts and UI components and make use of [3rd-party components](http://react-components.com/).

## Features
* Creation of pages as React components, using ES2015+ via [Babel](https://babeljs.io/)
* Creation of pages as Markdown documents
* Declarative, directory-based routes
* Declaratively include static assets via webpack's [url-loader](https://github.com/webpack/url-loader)
* Instant client-side route transitions
* On-demand module fetching via [webpack code splitting](https://webpack.github.io/docs/code-splitting.html)
* Server-side rendering during development, so what you see during development matches the static file which would be generated for production
* Live reloading during development as you edit code (sorry, just full-page reload currently; no HMR yet)

## Get Started
Clone this website to get started:
```shell
git clone https://github.com/nucleate/nucleatejs.github.io.git
npm install
npm start

# Build the static site
npm run build
```

[react]: https://facebook.github.io/react/
[webpack]: http://webpack.github.io/
