const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const prod = process.env.NODE_ENV === "production";

const buildPath = `${__dirname}/build/`;

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: buildPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
    new MiniCssExtractPlugin.default(),
    new CopyPlugin({
      patterns: [{ from: `${__dirname}/public/`, to: buildPath }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.default.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    compress: true,
    allowedHosts: [
      "3000-valflrt-discordwebhookc-fckl5d6pr8s.ws-eu38.gitpod.io",
    ],
  },
  devtool: prod ? undefined : "source-map",
};
