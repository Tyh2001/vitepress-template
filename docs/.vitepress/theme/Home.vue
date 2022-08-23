<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      Hello
    </f-text>

    <f-text align="center">
      <f-button round type="primary" class="start" href="/docs/hello.html">
        😊 快速开始
      </f-button>
      <f-button
        round
        href="https://github.com/Tyh2001/vitePress-demo"
        target="_blank"
      >
        Github
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>欢迎使用</f-text>
    <f-text block>⚡ 欢迎使用 vitePress-template</f-text>
    <f-text block>🌲 在这里编写你的博客吧</f-text>
    <f-text block>
      🔨 官方文档在
      <f-link href="https://vitepress.vuejs.org" type="primary"> 这里 </f-link>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>特性</f-text>
    <f-text>📌 开箱即用</f-text>
    <f-text>
      🚀 和
      <f-link
        href="https://github.com/FightingDesign/fighting-design"
        type="primary"
      >
        fighting-design
      </f-link>
      完美融合
    </f-text>
    <f-text>💪 使用 Vue.js 最新特性开发</f-text>
    <f-text>🐆 全面基于 Vite，速度够快</f-text>
    <f-text>🖍️ markdown 中直接使用 vue 组件</f-text>
    <f-text>✔️ 配置简单，上手容易</f-text>
    <f-text>🚩 markdown 中直接使用 setup 语法糖</f-text>
    <f-text>📃 第三方组件库支持</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 10px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
