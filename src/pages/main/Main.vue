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
import TopNav from '../../common/TopNav'
export default {
  name: 'Main',
  components: {MainPage, TopNav},
  data () {
    return {
      msg: 'Welcome to tower!'
    }
  }
}
</script>

<style lang="scss" scoped>

  .home{
    min-width: 100%;
    min-height: 100vh;
    padding: 0;

    #container{
      min-width: 100%;
      min-height: 100vh;
      padding: 0;
    }
  }
</style>
