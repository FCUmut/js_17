const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// to install mini css plugin, it will prevent flash of html without css in large projects while opening
// npm install --save-dev mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // allows us to use absolute file paths, __dirname refers to current directory and it is point to "dist" folder
    filename: "bundle.js", // we get rid of 'main.js'. it will be 'bundle.js'
    // npm run build
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // regular expressions are between '/ /' and '$' means stands for files ends with '.css'. and we apply style-loader and css-loader with 'use:'
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        // replaced
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // babel setup
      {
        // any file that ends with .js
        test: /\.js$/,
        // exlude the js files in node_modules
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // https://github.com/jantimon/html-webpack-plugin#options you can check which options you can use in html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      //<%= htmlWebpackPlugin.options.title %> to access title we set here from template index.html in src
      title: "Webpack App",
      filename: "index.html",
      template: "./src/index.html", // this will be our template
    }),
    // we will delete current 'dist' folder and
    // npm run build

    new MiniCssExtractPlugin(),
  ],
};

// in package.json we set "build": "webpack --mode production", mode production. hence, we clear it to only be "webpack"

// npm i -D style-loader css-loader // we include our CSS module but it needs to be configured

// npm i -D webpack-dev-server to webpack server instead of live server
