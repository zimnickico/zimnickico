import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
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
