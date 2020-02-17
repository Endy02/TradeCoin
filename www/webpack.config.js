const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: "./public/js/index.js",
    output: {
        filename: "www/public/dist/bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};