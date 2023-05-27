<template>
  <div class="footer">
    <a v-for="o in filing" :key="o.index" :href="o.url">{{ o.number }}</a>
  </div>
</template>
<script setup>
const filing = require('/infoconfig.json').filing

</script>
<style scoped>
a {
  text-decoration: none;
  color: #777;
  padding-right: 10px;
}

.footer {
  white-space: nowrap;
  font-size: 12px;
  width: 100%;
  text-align: right;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
}
</style>