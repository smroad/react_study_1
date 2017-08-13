module.exports = {
    entry:[
        './src/kanban1/App.js'
    ],
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    devtool: 'source-map',
    module:{
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }],

    }
}