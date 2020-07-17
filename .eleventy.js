module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
      "md",
      "html",
      "njk",
      "css" // css is not yet a recognized template extension in Eleventy
    ]);
    // Copy `img/` to `<output>/img/`
    //eleventyConfig.addPassthroughCopy("img");

    return {
      dir: {
        output: ".",
        input: "src"
      }
    };
};
