const path = require("path");
const CracoLessPlugin = require('craco-less');
const resolve = pathname => path.resolve(__dirname, pathname)
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {  },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils"),
            // '@mui/styled-engine': '@mui/styled-engine-sc'

        },
        configure:(webpackConfig,{env,paths}) => {
            // 修改build的生成文件名称
            paths.appBuild = 'dist';
            webpackConfig.output ={
                ...webpackConfig.output,
                path:path.resolve(__dirname,'dist'),
                publicPath:'/'
            }
            return webpackConfig;
        }

    }
}