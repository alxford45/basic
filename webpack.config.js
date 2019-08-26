/**
 * CommonJS import syntax
 * const x = require("package")
 *
 * es6 import synatx:
 * import x from "package"
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Webpack config file
 *
 * module.exports = {object} is the CommonJs export syntax which is used by NodeJs.
 */

module.exports = {
  /**
   * entry specifies the entry source code scripts to be bundled by webpack.
   */
  entry: {
    /**
     * assigns index.js and all its imports to the alias 'main'
     */
    main: path.join(__dirname, "src/index.js")
  },
  /**
   * output specifies the resolution of entry
   */
  output: {
    /**
     * takes alias 'main' (src/index.js) and formats it as 'main.bundle.js'
     */
    filename: "[name].bundle.js",
    /**
     * outputs 'main.bundle.js' to directory 'dist' when webpack --build is called.
     */
    path: path.resolve(__dirname, "dist")
  },
  /**
   * devServer specifies options for webpack-dev-server plugin
   *
   * webpack-dev-server builds bundle in memory so no actual 'dist' directory is created.
   * Instead 'dist' is created virtually and is treated like it exists as a real directory.
   */
  devServer: {
    /**
     * Will run on localhost:8080.
     */
    host: "localhost",
    port: 8080,
    /**
     * Automattically opens the webpage in default browser.
     */
    open: true,

    /**
     * Serves files from virtual 'dist' directory.
     */
    contentBase: path.resolve(__dirname, "dist"),
    /**
     * Automatically reloads page on changes to virtual 'dist' directory.
     */
    watchContentBase: true
  },
  plugins: [
    /**
     * plugin to template html files and dynamically parse them like js files
     * using the above input/output schema.
     *
     * example: src/index.js   -> dist/main.bundle.js
     *          src/index.html -> dist/index.html
     */
    new HtmlWebpackPlugin({
      /**
       * the filename of the newly created html file.
       */
      filename: "index.html",
      /**
       * the location of the html template to create the new html file.
       */
      template: path.join(__dirname, "src/index.html")
    })
  ]
};
