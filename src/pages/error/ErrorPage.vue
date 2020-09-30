<template>
  <div id="page-error">
    <div id="container">
      <div id="main">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ErrorPage',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  #page-error {
    min-width: 100%;
    min-height: 100vh;
    padding: 0;
    display: flex; /*这会让子div水平居中*/
    justify-content: center; /*这会让子div水平居中*/
    background: #DCDFE6;
  }

  #container {
    width: 40%;
    height: 350px;
    margin-top: 10%;
    display: flex; /*这会让子div水平居中*/
    justify-content: center; /*这会让子div水平居中*/
    background: gray;
  }

  #main {
    width: 70%;
    height: 300px;
    margin-top: 5%;
    background: gray;
  }

</style>
