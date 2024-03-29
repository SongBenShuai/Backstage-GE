const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/',
  devServer:{
    open:true,
    port:9999,
    https:false,
    host:'localhost',
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:this.process.env.VUE_APP_SERVICE_URL,
        changeOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  },
  lintOnSave:true,
  
})
