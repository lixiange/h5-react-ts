const webpack = require("webpack");
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra");

const path = require("path");
const resolveAlias = (dir) => path.join(__dirname, ".", dir);
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const rewireMap = () => (config) => {
  config.devtool =
    config.mode === "development" ? "cheap-module-source-map" : false;
  // config.mode === "development" ? "cheap-module-source-map" : 'source-map';
};

const dropConsole = () => {
  return (config) => {
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === "TerserPlugin") {
          minimizer.options.minimizer.options.compress.drop_console = true;
        }
      });
    }
    return config;
  };
};

module.exports = {
  webpack: function (config, env) {
    override(
      //antd-mobile 按需加载
      fixBabelImports("import", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        style: "css",
      }),
      addDecoratorsLegacy(),
      // 包分析插件
      process.argv[2] === "analysis" &&
        addWebpackPlugin(new BundleAnalyzerPlugin()),

      // 设置自定义环境变量
      addWebpackPlugin(
        new webpack.DefinePlugin({
          "process.env.CUSTOM_ENV": JSON.stringify(process.env.CUSTOM_ENV),
        })
      ),

      // 为一些文件夹添加别名
      addWebpackAlias({
        "@": resolveAlias("src"),
        utils: resolveAlias("src/utils"),
        Components: resolveAlias("src/Components"),
        images: resolveAlias("src/static/images"),
        style: resolveAlias("src/static/style"),
        pages: resolveAlias("src/pages"),
        store: resolveAlias("src/store"),
        config: resolveAlias("src/config"),
        hocs: resolveAlias("src/hocs"),
        hooks: resolveAlias("src/hooks"),
        request: resolveAlias("src/request"),
      }),
      dropConsole(), //生产环境下删除项目中的console
      rewireMap() //在生产环境下关闭sourcemap
    )(config, env);
    // 添加 postcss，具体配置项在 postcss.config.js 文件
    require("react-app-rewire-postcss")(config, true);

    return config;
  },
  paths: function (paths, env) {
    if (
      process.env.CUSTOM_ENV === "test" &&
      process.env.NODE_ENV === "production"
    ) {
      paths.appBuild = path.resolve(__dirname, "buildTest");
    }

    return paths;
  },
};
