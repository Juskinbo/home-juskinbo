<template>
  <Header />
  <Main />
  <Footer />
</template>
<script>
import Header from './components/headerComponent.vue'
import Main from './components/mainComponent.vue'
import Footer from './components/footerComponent.vue'
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
}
</script>
<style>
body {
  font-family: inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>