module.exports = {
    pluginOptions: {
      windicss: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
    devServer: {
      proxy: {// 代理服务器
        '/api': {
          target: 'https://m.maizuo.com',
          changeOrigin: true,// 是否开启跨域
          pathRewrite: {// 重写路径
            '^/api':''// 把api变为空字符
          }
        },
      }
    }
  }