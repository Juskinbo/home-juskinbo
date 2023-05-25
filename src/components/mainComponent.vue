<template>
  <div class='introduction'>
    <h1 style="font-family: brush-script">Juskinbo</h1>
    <p class="detail">
      Halo! I'm Juskinbo, a front-end developer from China.
      <br>
      <br>
      <br>
      Student of <a href="https://www.hznu.edu.cn">HZNU</a>.
      <br>
      <br>
      <br>
      Skills: HTML, CSS, JavaScript, Vue, Node.js, Express, Git, MySQL, Flutter, C/C++, Java, Python, etc.
      <br>
      <br>
      <br>
      Find me on
      <br>
      <br>
      <a href="https://github.com/Juskinbo">GitHub</a>, <a href="https://twitter.com/Juskinbo0326">Twitter</a> 
      <br>
      <br>
      <br>
      Or send an email.
      <br>
      <br>
      <a href="mailto:juskinbo@outlook.com">Outlook</a>, <a href="mailto:gjiangyufan@gmail.com">Gmail</a>
    </p>
  </div>
</template>
<script>

</script>
<style scoped>
.introduction {
  letter-spacing: 0.1em;
  font-size: 16px;
  margin: 5vh auto;
  /* text-align: center; */
  
  height: 100%;
  /* background-color: #000; */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 999; */
  /* opacity: 0.5; */
}

.introduction {
  background: linear-gradient(to right, #000000, #ffffff);
  /* 定义渐变颜色 */
  -webkit-background-clip: text;
  /* 将渐变应用于文字 */
  -webkit-text-fill-color: transparent; 
}

/* 定义动画效果 */
.introduction {
  animation: fadeIn 2s ease-in-out;
  /* 定义动画名称、持续时间和缓动函数 */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  /* 动画开始时，文字透明度为0 */
  100% {
    opacity: 1;
  }

  /* 动画结束时，文字透明度为1 */
}

@media screen and (min-width: 768px) {
  .introduction{
    width: 60%;
  }
}

@media screen and (max-width: 768px) {.introduction{
    width: 90%;
  }}</style>