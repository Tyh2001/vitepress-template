<template>
  <div id="home">
    <p class="title">Hello</p>

    <p align="center">
      <a href="/docs/hello.html">
        <button class="start">😊 快速开始</button>
      </a>
      <a href="https://github.com/Tyh2001/vitePress-demo" target="_back">
        <button>Github</button>
      </a>
    </p>

    <p class="box">
      <strong>欢迎使用</strong>
      <span>⚡ 欢迎使用 vitePress-demo</span>
      <span>🌲 在这里编写你的博客吧</span>
      <span>
        🔨 官方文档在
        <a target="_back" href="https://vitepress.vuejs.org">这里</a>
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
button {
  width: 120px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #eee;
  color: #333;
  border-radius: 10px;
  margin-bottom: 30px;
  user-select: none;
}
.start {
  margin-right: 15px;
  background: #2d5af1;
  color: #fff;
  font-weight: 600;
}
button:hover {
  opacity: 0.8;
}

button:active {
  opacity: 1;
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
