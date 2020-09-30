<template>
  <div class="home">
<!--    <top-nav></top-nav>-->
    <div id="container">
      <main-page></main-page>
    </div>
    <div style="clear:both;"></div>
<!--    <bottom-footer></bottom-footer>-->
  </div>
</template>

<script>
import MainPage from './MainPage'
export default {
  name: 'Main',
  components: {MainPage},
  data () {
    return {
      msg: 'Welcome to tower!'
    }
  }
}
</script>

<style lang="scss" scoped>

  .home{
    min-height: 1200px;

    #container{
      min-height: 1200px;
    }
  }
</style>
