---
title: Comparison
---

# Comparison to other React static site generators

### [Gatsby](https://github.com/gatsbyjs/gatsby/)

Similar to Nucleate, Gatsby offers:
* Creation of pages as React components, using ES2015+ via [Babel](https://babeljs.io/)
* Creation of pages as Markdown documents
* Declarative, directory-based routes
* Instant client-side route transitions
* Live reloading during development as you edit code

In addition, Gatsby also offers:
* Hot module replacement via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)

  *Note: I chose not to add HMR to Nucleate yet due to being unable to hot reload Markdown pages (due to [issues described here by @gaearon ](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf)), and due to conflicts with Nucleate's server rendering. When react-hot-loader@3 is released and [react-router#2182](https://github.com/reactjs/react-router/issues/2182) is resolved, I'll reconsider HMR.*

* The `gatsby new` command to create a new site from a template

However, Gatsby some drawbacks (in my opinion):
* [Complex, opinionated configuration and folder structure](https://github.com/gatsbyjs/gatsby/blob/ab9736676b030b148032a4e6b66b377ee34ee094/README.md#structure-of-a-gatsby-site): `config.toml`, `html.js`, `/pages`, `_template.jsx`, etc.
* No server rending during development: means poor [dev/prod parity](http://12factor.net/dev-prod-parity).

### [Statinamic](http://moox.io/statinamic/)

Coming soon.

### [Sitegen](https://sitegen.github.io/)

Coming soon.
