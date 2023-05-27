<template>
  <div class="header">
    <div class="name"><a href="/">{{ motto }}</a></div>
    <div class='websites'>
      <a v-for="o in websites" :key="o.title" :href="o.url" class="website"><img :src="o.icon" class="icons"><span
          class="titles">{{ o.title }}</span></a>
      <el-switch v-model="value" size="small" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { ElSwitch } from 'element-plus'
import { Sunny, Moon } from '@element-plus/icons-vue'
const websites = require('/infoconfig.json').links
const motto = require('/infoconfig.json').motto
const now = ref(new Date())
let value
if (now.value.getHours() >= 6 && now.value.getHours() < 18) {
  value = ref(true) // 白天
}
else {
  value = ref(false) // 黑夜
}
watch(value, (val) => {
  document.body.classList.forEach(className => {
    document.body.classList.remove(className);
  });
  if (val) {
    document.body.classList.add('light')
  }
  else {
    document.body.classList.add('dark')
  }
}, { immediate: true })

</script>
<style scoped>
@font-face {
  font-family: 'brush-script';
  src: url('../assets/fonts/BrushScript.otf');
}

.el-switch {
  --el-switch-on-color: #dcdfe6;
  --el-switch-off-color: #534d4d;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: auto;
  height: 20px;
}

.header {
  text-align: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  font-size: 20px;
  width: 100%;
  margin-top: 3vh;
}

.name {
  font-family: brush-script, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
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
  display: flex;
}

@media screen and (min-width: 768px) {
  .icons {
    display: none;
  }

  .titles {
    display: inline;
  }

  .website {
    padding-right: 20px;
  }

  .el-switch {
    padding-right: 20px;
  }
}

@media screen and (max-width: 768px) {
  .icons {
    display: block;
  }

  .titles {
    display: none;
  }

  .website {
    padding-right: 10px;
  }

  .el-switch {
    padding-right: 10px;
  }
}
</style>