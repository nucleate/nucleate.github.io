webpackJsonp([6],{

/***/ 430:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"layout":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"meta":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"markdown":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody"]}!./src/pages/comparison.md ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = {\"layout\": __webpack_require__(/*! -!./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md */ 493),\"meta\": __webpack_require__(/*! -!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md */ 474),\"markdown\": __webpack_require__(/*! -!./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/comparison.md */ 514)}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/combine-loader/lib?{\"layout\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"meta\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"markdown\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody\"]}!./src/pages/comparison.md\n ** module id = 430\n ** module chunks = 6\n **/\n//# sourceURL=webpack:///./src/pages/comparison.md?./~/combine-loader/lib?%7B%22layout%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22meta%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22markdown%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody%22%5D%7D");

/***/ },

/***/ 474:
/*!****************************************************************************************!*\
  !*** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md ***!
  \****************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"title\": \"Comparison\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md\n ** module id = 474\n ** module chunks = 6\n **/\n//# sourceURL=webpack:///./src/pages/comparison.md?./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 493:
/*!******************************************************************************************************************************************!*\
  !*** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md ***!
  \******************************************************************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = undefined;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/comparison.md\n ** module id = 493\n ** module chunks = 6\n **/\n//# sourceURL=webpack:///./src/pages/comparison.md?./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 514:
/*!*********************************************************************************!*\
  !*** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/comparison.md ***!
  \*********************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"\\n# Comparison to other React static site generators\\n\\n### [Gatsby](https://github.com/gatsbyjs/gatsby/)\\n\\nSimilar to Nucleate, Gatsby offers:\\n* Creation of pages as React components, using ES2015+ via [Babel](https://babeljs.io/)\\n* Creation of pages as Markdown documents\\n* Declarative, directory-based routes\\n* Instant client-side route transitions\\n* Live reloading during development as you edit code\\n\\nIn addition, Gatsby also offers:\\n* Hot module replacement via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)\\n\\n  *Note: I chose not to add HMR to Nucleate yet due to being unable to hot reload Markdown pages (due to [issues described here by @gaearon ](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf)), and due to conflicts with Nucleate's server rendering. When react-hot-loader@3 is released and [react-router#2182](https://github.com/reactjs/react-router/issues/2182) is resolved, I'll reconsider HMR.*\\n\\n* The `gatsby new` command to create a new site from a template\\n\\nHowever, Gatsby some drawbacks (in my opinion):\\n* [Complex, opinionated configuration and folder structure](https://github.com/gatsbyjs/gatsby/blob/ab9736676b030b148032a4e6b66b377ee34ee094/README.md#structure-of-a-gatsby-site): `config.toml`, `html.js`, `/pages`, `_template.jsx`, etc.\\n* No server rending during development: means poor [dev/prod parity](http://12factor.net/dev-prod-parity).\\n\\n### [Statinamic](http://moox.io/statinamic/)\\n\\nComing soon.\\n\\n### [Sitegen](https://sitegen.github.io/)\\n\\nComing soon.\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/comparison.md\n ** module id = 514\n ** module chunks = 6\n **/\n//# sourceURL=webpack:///./src/pages/comparison.md?./~/raw-loader!./~/front-matter-loader?onlyBody");

/***/ }

});