const path = require("path");

module.exports = ({ file }) => {
  const isAntdMobile = file.dirname.includes(
    path.join("node_modules", "antd-mobile")
  );
  const designWidth = isAntdMobile ? 375 : 375;
  const designHeight = isAntdMobile ? 667 : 667;
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        viewportWidth: designWidth, // (Number) The width of the viewport.
        viewportHeight: designHeight, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: "vw", // (String) Expected units.
        selectorBlackList: [], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: true, // (Boolean) Allow px to be converted in media queries.
      },
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        utf8: false,
      },
    },
  };
};
