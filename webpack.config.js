const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const highlight = require('highlight.js');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(md)$/,
                use: [
                    'html-loader',
                    {
                        loader: 'markdown-loader',
                        options: {
                            highlight: (code, lang) => {
                                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                                    return `<pre class="hljs">${code}</pre>`;
                                }
                                const html = highlight.highlight(lang, code).value;
                                return `<span class="hljs">${html}</span>`;
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/public/index.html",
            filename: "./index.html"
        }),
        new CopyPlugin([
            //{ from: './src/assets', to: path.resolve(__dirname, 'dist/assets') },
        ]),
    ]
};