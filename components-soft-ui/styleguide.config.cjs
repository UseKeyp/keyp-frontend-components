const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    module: {
        rules: [
            {
                test: /.\.md$/,
                type: 'javascript/auto',
            },
            {
                test: /\.js?$/,
                use: [{
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'jsx'
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        // Rewrites the absolute paths to those two files into relative paths
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
            'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
        ),
        new webpack.NormalModuleReplacementPlugin(
            /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
            'react-styleguidist/lib/loaders/utils/client/evalInContext'
        ),
    ],
};



module.exports = {
    webpackConfig,
    components: 'src/components/**/*.js',
    require: [
        path.join(__dirname, './dist/output.css') // for styleguidist to work with tailwind we have to reference compiled css here
    ]
};