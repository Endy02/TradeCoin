const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: "./public/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader?sourceMap",
                ],
            },
        ],
    },
};