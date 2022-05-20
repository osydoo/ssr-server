const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
    name: 'client',
    entry: {
        client: path.resolve(__dirname, 'client/client.tsx')
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '/dist/static'),
        filename: '[name].[contenthash].js',
        publicPath: "",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.client.json'
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin({})],
    // CleanWebpackPlugin : 빌드 이전 결과물을 제거하는 플러그인 - webpack5부터 자체적 대체제가 생겼다.
    // WebpackManifestPlugin: 번들링된 파일에 해시를 넣어 유니크한 이름으로 만들어준다.
}