<template>
  <div id="page-main">
  </div>
</template>

<script type="text/javascript">
import verificationCode from '../login/VerificationCode'
import axios from 'axios'
export default {
  name: 'MainPage',
  components: {verificationCode},
  data () {
    return {
      validCode: ''
    }
  },
  methods: {
    getCodeMsg (data) {
      this.validCode = data
    },
    gotoDetail () {
      axios.post(this.$req.manageApi + 'token/getUser', {}, {
        params: {
          token: this.$store.state.token
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-main{
    min-height: 1200px;
    margin: auto;
  }
</style>
