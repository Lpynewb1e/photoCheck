<template>
    <div class="card">
      <div class="photo">
        <h3>welcome to my regist</h3>
      </div>
      <div class="form">
        <el-form :model="newUserForm" ref="newUserForm" label-width="100px" :rules="rules">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="newUserForm.username" ref="usernm"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="newUserForm.password" ref="passwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('newUserFrom')">注册</el-button>
            <el-button type="primary" @click="submitForm('newUserFrom')">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'regist',
  data () {
    return {
      newUserForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { min: 8, max: 16, message: '用户名在8-16', trigger: 'blur' },
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          {min: 8, max: 16, message: '密码在8-16位', trigger: 'blur'},
          {required: true, message: '请输入密码', trigger: 'blur'},
          {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: '密码必须是数字和字母组合', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log('用户名' + this.$refs.usernm.value)
      console.log('密码' + this.$refs.passwd.value)
      console.log('加密后的密码' + this.$md5(this.$refs.passwd.value))
      console.log(formName)
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
