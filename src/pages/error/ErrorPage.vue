<template>
  <div id="page-error">
    <div id="container">
      <div id="main">
        <el-row>
          <el-col :span="15" :offset="4">
            <div class="grid-content message">
              <span>抱歉，访问的页面出错了</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :offset="4">
            <div class="grid-content cause">
              <h4>可能原因：</h4>
              <h5>网络连接问题</h5>
              <h5>服务器访问出现问题</h5>
            </div>
          </el-col>
          <el-col :span="7" :offset="1">
            <div class="grid-content action">
              <h4>您可以：</h4>
              <el-button class="el-button--primary"  @click="gotoLogin">返回登录页</el-button>
            </div>
          </el-col>
        </el-row>
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
    gotoLogin () {
      this.$router.push('/login')
    }
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
    width: 100%;
    height: 400px;
    margin-top: 10%;
    display: flex; /*这会让子div水平居中*/
    justify-content: center; /*这会让子div水平居中*/
    background: gray;
  }

  #main {
    width: 100%;
    height: 300px;
    margin-top: 2%;
    background: gray;
  }

  .message {
    border-radius: 4px;
    min-height: 60px;
    text-align: left;
    font-size:48px;
    color: #DCDFE6;
  }

  .cause {
    margin-top: 50px;
    border-radius: 4px;
    min-height: 150px;
    text-align: left;
    font-size:24px;
    color: #DCDFE6;
  }

  .action {
    margin-top: 50px;
    border-radius: 4px;
    min-height: 150px;
    text-align: left;
    font-size:24px;
    color: #DCDFE6;
  }

</style>
