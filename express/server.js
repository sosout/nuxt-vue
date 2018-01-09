const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 8888

// 传入配置初始化 Nuxt.js 实例
let config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// 在开发模式下进行编译
if (config.dev) {
  new Builder(nuxt).build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('> 服务器运行于 http://localhost:' + port)