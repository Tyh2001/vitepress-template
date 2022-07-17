<template>
  <div id="home">
    <h1 class="title">Hello</h1>

    <p align="center">
      <f-button round type="primary" class="start" href="/docs/hello.html">
        😊 快速开始
      </f-button>
      <f-button round href="https://github.com/Tyh2001/vitePress-demo">
        Github
      </f-button>
      <br />
      <br />
    </p>

    <p class="box">
      <strong>欢迎使用</strong>
      <span>⚡ 欢迎使用 vitePress-demo</span>
      <span>🌲 在这里编写你的博客吧</span>
      <span>
        🔨 官方文档在
        <f-link href="https://vitepress.vuejs.org" type="primary">
          这里
        </f-link>
      </span>
    </p>

    <p class="box">
      <strong>内容</strong>
      <span>⚡ 你的内容1</span>
      <span>🌲 你的内容2</span>
      <span>🔨 你的内容3</span>
    </p>
  </div>
</template>

<style scoped>
  #home {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }
  .title {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    line-height: 70px;
    margin-bottom: 20px;
    user-select: none;
  }
  .box {
    padding: 40px 0;
    border-top: 1px solid rgb(224, 224, 224);
    box-sizing: border-box;
  }
  .box span {
    display: block;
    line-height: 40px;
  }
  .box strong {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    display: block;
  }
</style>
