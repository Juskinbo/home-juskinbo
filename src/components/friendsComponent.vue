<template>
  <div class="friends">
    <h1 style="font-family: brush-script">Friends</h1>
    <div class="grid">
      <div class="friend" v-for="o in friends" :key="o.index" :href="o.url">
        <el-avatar :size="50" :src="o.avatar"></el-avatar>
        <span class="name">bs' realm</span>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ElAvatar } from 'element-plus';
const friends = require('/infoconfig.json').friends
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto;
}

.friend {
  /* 使得图片中心与文字对齐 */
  display: flex;
  margin-bottom: 30px;
}

.name {
  margin-left: 10px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}

.friends {
  letter-spacing: 0.1em;
  font-size: 16px;
  margin: 10vh auto;
  height: 100%;
}

.friends {
  background: linear-gradient(to right, rgb(30, 30, 30), rgb(225, 225, 225));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.friends {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 768px) {
  .friends {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .friends {
    width: 90%;
  }
}
</style>