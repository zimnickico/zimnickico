import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAttrs from "markdown-it-attrs";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  const markdown = markdownIt({ html: true }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("styles/global.css");
  eleventyConfig.addPassthroughCopy("styles/override.css");
  eleventyConfig.addPassthroughCopy("assets/");
}

export const config = {
  dir: {
    includes: "_includes",
    layouts: "layouts",
  },
};
