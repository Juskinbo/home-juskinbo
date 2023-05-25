<template>
  <div class="header">
    <div class="name"><a href="/">Infinite progress</a></div>
    <div class='websites'>
      <a v-for="o in websites" :key="o.title" :href="o.url" class="website"><img :src="o.icon" class="icons"><span
          class="titles">{{ o.title }}</span></a>
    </div>
  </div>
</template>
<script setup>
const websites = [
  { index: 1, title: 'Home', url: '/', icon: 'https://s2.loli.net/2023/05/26/vamwe9r4CxDb2LQ.png' },
  { index: 2, title: 'Blog', url: 'https://blog.juskinbo.cn', icon: 'https://s2.loli.net/2023/05/26/Q5yxwOA1MspRbV9.png' },
  { index: 3, title: 'Memos', url: 'https://memos.juskinbo.cn', icon: 'https://s2.loli.net/2023/05/26/tV5vOPBKY9jA6rG.png' },
  { index: 4, title: 'Cloud', url: 'https://cloud.juskinbo.cn', icon: 'https://s2.loli.net/2023/05/26/R3cJXgif7dbvFA2.png' }
]
</script>
<style scoped>
@font-face {
  font-family: 'brush-script';
  src: url('../assets/BrushScript.otf');
}

a {
  /* 删除下划线 */
  text-decoration: none;
  /* 不修改颜色 */
  color: inherit;
}

img {
  /* 自适应大小 */
  width: auto;
  height: 20px;
}

.header {
  /* 所有元素放在同一排 */
  text-align: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  font-size: 20px;
  /* 占满一整行 */
  width: 100%;
  margin-top: 3vh;
  /* position: relative; */
}

.name {
  font-family: brush-script, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  /* 靠左放置 */
  /* width: 10%; */
  float: left;
  padding-left: 20px;
}



.websites {
  color: #777777;
  /* 靠右放置 */
  position: absolute;
  margin-right: 0vw;
  right: 0vw;
  float: right;
  /* list-style: none; */
  /* 将所有的li放在同一列 */
  display: flex;
}

.website {
  padding-right: 20px;
}

@media screen and (min-width: 768px) {
  .icons {
    display: none;
  }

  .titles {
    display: inline;
  }
}

@media screen and (max-width: 768px) {
  .icons {
    display: block;
  }

  .titles {
    display: none;
  }
}</style>