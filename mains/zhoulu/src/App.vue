<template>
  <div id="app">
    <header-z></header-z>
    <router-view></router-view>
    <footer-z></footer-z>
  </div>
</template>

<script>

import header from './components/header-z'
import footer from './components/footer-z'

export default {
  name: 'app',
  components: {
    'header-z':header,
    'footer-z':footer,
  }
}
</script>

<style>

</style>
