// webpack.config.server.js
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "server/server.ts"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: [nodeExternals()],
  target: "node", // webpack할 환경을 적는다. ex) borwserlist 등
  node: {
    __dirname: false, // webpack에서는 true일 시 옵션을 통해 경로지정 가능한데, false일 시 고정시킴
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.server.json",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      // 이미 존재하는 개별파일 또는 전체 디렉토리를 빌드 디렉토리에 복사합니다.
      patterns: [{ context: "server", from: "views", to: "views" }],
    }),
  ],
};
