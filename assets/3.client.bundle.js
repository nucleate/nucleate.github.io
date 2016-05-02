webpackJsonp([3],{

/***/ 130:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"layout":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"meta":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"markdown":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody"]}!./src/pages/home.md ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = {\"layout\": __webpack_require__(/*! -!./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md */ 138),\"meta\": __webpack_require__(/*! -!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md */ 135),\"markdown\": __webpack_require__(/*! -!./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/home.md */ 141)}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/combine-loader/lib?{\"layout\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"meta\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"markdown\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody\"]}!./src/pages/home.md\n ** module id = 130\n ** module chunks = 1 3\n **/\n//# sourceURL=webpack:///./src/pages/home.md?./~/combine-loader/lib?%7B%22layout%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22meta%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22markdown%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody%22%5D%7D");

/***/ },

/***/ 135:
/*!**********************************************************************************!*\
  !*** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md ***!
  \**********************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"title\": \"Home\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md\n ** module id = 135\n ** module chunks = 1 3\n **/\n//# sourceURL=webpack:///./src/pages/home.md?./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 138:
/*!************************************************************************************************************************************!*\
  !*** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md ***!
  \************************************************************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = undefined;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/home.md\n ** module id = 138\n ** module chunks = 1 3\n **/\n//# sourceURL=webpack:///./src/pages/home.md?./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 141:
/*!***************************************************************************!*\
  !*** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/home.md ***!
  \***************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"\\n>Nucleation is the first step in the formation of either a new thermodynamic phase or a new structure via self-assembly or self-organization.\\n>\\n> &mdash; <cite>[Wikipedia](https://en.wikipedia.org/wiki/Nucleation)</cite>\\n\\nNucleate is a static site generator powered by [React][] and [webpack][].\\n\\nLike [other static site generators](~/comparison), it makes creating static websites easier and faster than plain HTML and CSS. With Nucleate, you create the pages of your site as React components, allowing you to easily reuse layouts and UI components and make use of [3rd-party components](http://react-components.com/).\\n\\n## Features\\n* Creation of pages as React components, using ES2015+ via [Babel](https://babeljs.io/)\\n* Creation of pages as Markdown documents\\n* Declarative, directory-based routes\\n* Declaratively include static assets via webpack's [url-loader](https://github.com/webpack/url-loader)\\n* Instant client-side route transitions\\n* On-demand module fetching via [webpack code splitting](https://webpack.github.io/docs/code-splitting.html)\\n* Server-side rendering during development, so what you see during development matches the static file which would be generated for production\\n* Live reloading during development as you edit code (sorry, just full-page reload currently; no HMR yet)\\n\\n## Get Started\\nClone this website to get started:\\n```shell\\ngit clone https://github.com/nucleate/nucleatejs.github.io.git\\nnpm install\\nnpm start\\n\\n# Build the static site\\nnpm run build\\n```\\n\\n[react]: https://facebook.github.io/react/\\n[webpack]: http://webpack.github.io/\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/home.md\n ** module id = 141\n ** module chunks = 1 3\n **/\n//# sourceURL=webpack:///./src/pages/home.md?./~/raw-loader!./~/front-matter-loader?onlyBody");

/***/ }

});