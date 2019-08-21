/**
 * Webpack config file
 *
 * module.exports = {object} is the CommonJs export syntax which is used by NodeJs.
 */
module.exports = {
  /**
   * devServer specifies options for webpack-dev-server plugin
   */
  devServer: {
    port: 8080, // Will run on localhost:8080
    contentBase: "./src", // Serves files in src directory
    open: true // Automattically opens the webpage in default browser
  }
};
