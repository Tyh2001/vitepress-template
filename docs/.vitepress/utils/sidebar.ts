/**
 * 侧边栏模块
 * 
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/hello',
      items: [
        { text: 'hello', link: '/docs/hello' },
        { text: '欢迎使用', link: '/docs/welcome' }
      ]
    }
  ]
}
