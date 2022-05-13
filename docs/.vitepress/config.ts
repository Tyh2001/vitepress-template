import { defineConfig } from 'vitepress'

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
