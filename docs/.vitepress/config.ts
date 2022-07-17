import { defineConfig } from 'vitepress'

// 更多配置项参考：https://vitepress.vuejs.org/config/app-configs.html

const config = defineConfig({
  title: 'hello',

  themeConfig: {
    nav: [
      {
        text: '文档',
        activeMatch: '/docs/',
        link: '/docs/hello'
      }
    ]
  }
})

export default config
