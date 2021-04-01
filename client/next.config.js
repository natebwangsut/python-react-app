// next.config.js
const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  /* regular next.js config options here */
  // Let's disable webpack5 until this is fixed
  // https://github.com/vercel/next.js/issues/23130
  // future: {
  //   webpack5: true,
  // },
});
