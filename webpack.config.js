var webpack = require('webpack');
var path = require("path");
var glob = require("glob");
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var srcDir = path.resolve(process.cwd(), 'src');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

// IndexReducer, CommonAction, AuthHelper
var aliasFiles = glob.sync(srcDir+"/+(actions|reducers|helpers)/*.+(js|jsx)")
var aliasObj = {}
aliasFiles.forEach(function(filepath, index){
    var fileReg = /.+(actions|reducers|helpers|constants)\/(\w+)(\.jsx?)/i;
    var aliasItem = filepath.replace(fileReg, function($0, $1, $2) {
        var floder = $1.substring(0, 1).toUpperCase() + $1.substring(1, $1.length - 1)
        var name = $2.substring(0, 1).toUpperCase() + $2.substring(1)
        return name+floder
    });
    aliasObj[aliasItem] = filepath
});
var otherAliasObj = {
    ReduxForm: 'redux-form',
    ActionType: path.resolve(srcDir, 'constants/ActionTypes.jsx')
}
aliasObj = Object.assign(aliasObj, otherAliasObj);

module.exports = {
    entry: {
        index: path.resolve(process.cwd(), 'src/index.jsx'),
        // vendor里面放哪些，不放哪些
        vendor: [ 'react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'react-router-redux', 'react-router', 'redux-form', 'classnames',  'axios']
    },
    output: {
        path: 'build/',
        publicPath: 'build/',
        filename: '[name].js'
    },
    resolve:{
        root: srcDir,
        extensions: ['', '.js', '.jsx'],
        alias: aliasObj
    },
    externals:{
        
    },
    noParse:[nodeModulesDir],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: srcDir,
                loader: 'jsx'
            },{
                test: /\.jsx?$/,
                include: [srcDir],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                },
               
            },  {
                test: /.css$/,
                include: [path.resolve(__dirname, 'src/style')],
                loader: ExtractTextPlugin.extract('style', 'css!sass!postcss')
               
            }, {
                test: /.css$/,
                exclude: [path.resolve(__dirname, 'src/style')],
                loader: ExtractTextPlugin.extract('style', 'css?modules!sass!postcss')
               
            }, {
                test: /\.(png|jpg)$/,
                include: srcDir,
                loader: 'url?limit=8192'
                //loader: 'url?limit=8192&name=img/[name].[ext]' //注意后面那个limit的参数，当你图片大小<=8k这个限制的时候，会自动启用base64编码图片，否则放入name后的目录下（最好是可以为文件所在的当前文件夹下）
            },{
                test: /\.(ttf|eot|svg|woff2?)(\?.*)?$/, 
                loader: 'url?limit=8192' //用法同img的解释
            }
        ]
    },
    postcss: function(webpack) {
      return [
            //  解决文件内import文件，修改reload问题
            require('postcss-import')({
              addDependencyTo: webpack
            }),
            require("precss"), // 预处理插件
            require("postcss-all-link-colors"), 
            require("postcss-color-short"),
            require("postcss-inline-block"), // inline-block兼容处理
            require("autoprefixer"), // 自动添加浏览器前缀
            require("postcss-discard-comments"), // 去掉注释
            require("postcss-discard-empty")// 删除空标签
      ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CommonsChunkPlugin({
            name: "vendor",//和上面配置的入口对应
            filename: "vendor.js"//导出的文件的名称
        })
        
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        make react much smaller by doing a production build
        new webpack.DefinePlugin({
            'process.env': {
              // This has effect on the react lib size
              'NODE_ENV': JSON.stringify('production'),
            },
          }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])

} else {
    module.exports.devtool = '#cheap-module-eval-source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        
    ]);
    
    var proxyObj = ['/api/*']
                .reduce(function(o, u){
                    o[u] = {
                        target: 'http://test.com:1111',
                        secure: false
                    };
                    return o;
                }, {})
                

    // 代理请求
    module.exports.devServer = {
        inline: true,
        hot: true,
        contentBase: './', // index.html在运行起来之后的路径
        historyApiFallback: true,
        changeOrigin: true,
        proxy: proxyObj
    }

}
