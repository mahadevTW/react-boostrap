var config = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }, ],

            },
            {
                test: /\.css?$/,
                use: [{
                  loader: 'style-loader'
                },{
                    loader:'css-loader'
                } ],

            }
        ]
    }
}
module.exports = config;