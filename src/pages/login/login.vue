<template>
    <div class="card">
      <div class="photo">
        <h3></h3>
      </div>
      <div class="form">
        <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formForm) {
      console.log(this.$store.state.isLogin)
      this.$store.commit('hide')
      this.$router.push({
        path: '/',
        query: {
          isLogin: this.$store.state.isLogin
        }
      })
    }
  }
}
</script>

<style scoped>
  .card {
    box-shadow: 1px 10px 15px rgba(0,0,0,.7);
    border-radius: 3px;
    max-width: 45em;
    margin: 4em auto;
    display: flex;
  }
  .photo {
    width: 50%;
    padding-top: 70px;
  }
  .form {
    padding-top: 30px;
  }
</style>
