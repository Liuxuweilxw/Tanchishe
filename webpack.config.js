const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports={
    mode: "production",
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        //IE浏览器不支持箭头函数，通过environment参数可以强制webpack使用普通函数
        environment: {
            arrowFunction: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "88",
                                            // "ie":"11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage",
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/app.html"
        }),
        new CleanWebpackPlugin(),
    ],

    resolve: {
        extensions: ['.ts','.js']
    }
};