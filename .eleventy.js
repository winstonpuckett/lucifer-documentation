const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    // #region minify
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        
        return content;
    });
    // #endregion minify

    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };