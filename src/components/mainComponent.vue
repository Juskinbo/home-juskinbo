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
      <a href="https://github.com/Juskinbo"><img src="../assets/images/github.svg"><strong>GitHub</strong></a>, <a
        href="https://twitter.com/Juskinbo0326"><img src="../assets/images/twitter.svg"><strong>Twitter</strong></a>, <a
        href="https://juskinbo.cn/wechat.JPG"><img src="../assets/images/wechat.svg"><strong>WeChat</strong></a>, <a
        href="https://qm.qq.com/cgi-bin/qm/qr?k=cJsUIWK9Co-oHZfOsDFBYZe3734oAMvW&noverify=0&personal_qrcode_source=3"><img
          src="../assets/images/qq.svg"><strong>QQ</strong></a>
      <br>
      <br>
      <br>
      Or send an email.
      <br>
      <br>
      <a href="mailto:juskinbo@outlook.com"><strong>Outlook</strong></a>, <a
        href="mailto:gjiangyufan@gmail.com"><strong>Gmail</strong></a>
    </p>
  </div>
</template>
<style scoped>
img {
  height: 19px;
  padding-right: 5px;
}

.introduction {
  letter-spacing: 0.1em;
  font-size: 16px;
  margin: 10vh auto;
  height: 100%;
}

.introduction {
  background: linear-gradient(to right, rgb(30, 30, 30), rgb(225, 225, 225));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.introduction {
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
  .introduction {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .introduction {
    width: 90%;
  }
}
</style>