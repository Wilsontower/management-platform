<template>
  <div id="page-login">
    <div id="container">
      <div id="form">
        <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
          <el-form-item prop="userId">
            <el-input v-model="ruleForm.userId" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="ruleForm.code" style="width: 66%;float:left;" placeholder="验证码"></el-input>
            <verification-code ref="vCode" @handleCodeMsg="getCodeMsg"></verification-code>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import verificationCode from './VerificationCode'
import axios from 'axios'

export default {
  name: 'LoginPage',
  components: {verificationCode},
  data () {
    let self = this
    let checkCode = (rule, value, callback) => {
      value = value.toString()
      if (!value || value.length < 4) {
        return callback(new Error('请输入验证码'))
      } else {
        if (value.toLowerCase() !== self.validCode.toLowerCase()) {
          return callback(new Error('验证码错误'))
        } else {
          callback()
        }
      }
    }
    return {
      labelPosition: 'middle',
      validCode: '',
      ruleForm: {
        userId: '',
        password: '',
        code: ''
      },
      rules: {
        userId: [
          {trigger: 'blur'}
        ],
        password: [
          {trigger: 'blur'}
        ],
        code: [
          {validator: checkCode, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post(this.$req.manageApi + '/user/check', {}, {
            params: {
              userId: this.ruleForm.userId,
              password: this.ruleForm.password
            }
          }).then(res => {
            if (res.data.status === 'success') {
              self.getToken(this.ruleForm.userId)
            } else {
              self.$message({message: '账号或密码错误', type: 'error'})
              self.$refs.vCode.refreshCode()
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          self.$message({message: '请完善账号密码', type: 'error'})
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getCodeMsg (data) {
      this.validCode = data
    },
    getToken (userId) {
      axios.post(this.$req.manageApi + 'token/build', {}, {
        params: {
          userId: userId
        }
      }).then(res => {
        this.$store.setToken(res.data)
        this.$router.push('/main')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  #page-login {
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

  #form {

    width: 70%;
    height: 10%;
    margin-top: 10%;
    background: gray;
  }

</style>
