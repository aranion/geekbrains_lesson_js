const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./public/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "/",
    filename: "js/[name].js",
  },
  target: "web",
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.sass$/,
      //     use: ["style-loader", "css-loader", "sass-loader"],
      //   },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      excludeChunks: ["server"],
    }),
    new CopyPlugin(
      //     { patterns:
      [
        {
          from: "public/favicon.ico",
          to: "[name].[ext]",
          toType: "template",
        },
        {
          from: "public/images/all",
          to: "images/all/[name].[ext]",
          toType: "template",
        },
        {
          from: "public/images/catalog",
          to: "images/catalog/[name].[ext]",
          toType: "template",
        },
        {
          from: "public/images/index",
          to: "images/index/[name].[ext]",
          toType: "template",
        },
        {
          from: "public/images/product",
          to: "images/product/[name].[ext]",
          toType: "template",
        },
      ]
      // }
    ),
  ],
};
