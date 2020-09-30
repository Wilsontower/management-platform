<template>
  <div id="page-detail">
    <h2>detail</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DetailPage',
  data () {
    return {
      validCode: ''
    }
  },
  methods: {
    getCodeMsg (data) {
      this.validCode = data
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-detail{
    min-height: 1200px;
    margin: auto;
  }
</style>
