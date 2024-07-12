<template>
  <div class="container">
    <div class="header">

      <div class="left">
        <span>
          <svg t="1720659831675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4838" width="45" height="45"><path d="M419.84 281.6c-15.36-5.12-30.72 0-35.84 10.24l-20.48 40.96-87.04 15.36c-15.36 5.12-20.48 15.36-20.48 30.72 0 10.24 15.36 20.48 25.6 20.48l107.52-15.36c5.12 0 15.36-5.12 15.36-15.36l25.6-51.2c5.12-15.36 0-30.72-10.24-35.84zM204.8 394.24c-5.12-15.36-15.36-20.48-30.72-20.48l-102.4 15.36c-10.24 0-15.36 5.12-20.48 15.36-5.12 10.24 0 20.48 5.12 25.6l51.2 51.2c5.12 5.12 15.36 5.12 20.48 5.12h20.48c10.24-10.24 10.24-25.6 0-35.84l-15.36-15.36 51.2-10.24c15.36-5.12 25.6-15.36 20.48-30.72zM757.76 742.4c20.48-5.12 30.72-15.36 25.6-30.72L768 624.64l40.96-40.96c10.24-10.24 10.24-25.6 0-35.84-10.24-10.24-25.6-10.24-35.84 0l-51.2 51.2c-5.12 5.12-5.12 10.24-5.12 20.48l15.36 102.4c0 10.24 15.36 20.48 25.6 20.48zM773.12 788.48c-15.36 5.12-20.48 15.36-20.48 30.72l10.24 51.2-107.52-56.32c-15.36-5.12-30.72-5.12-35.84 10.24-5.12 15.36 0 30.72 10.24 35.84l153.6 81.92c0 5.12 5.12 5.12 10.24 5.12s10.24 0 15.36-10.24c10.24-5.12 10.24-15.36 10.24-25.6l-15.36-102.4c-5.12-15.36-15.36-25.6-30.72-20.48zM250.88 624.64l-5.12 35.84c0 15.36 5.12 25.6 25.6 30.72 15.36 0 25.6-10.24 25.6-20.48l10.24-51.2c0-10.24 0-15.36-10.24-20.48l-51.2-51.2c-10.24-10.24-25.6-10.24-35.84 0-10.24 10.24-10.24 25.6 0 35.84l40.96 40.96zM322.56 844.8l-56.32 30.72 15.36-102.4c5.12-15.36-5.12-30.72-20.48-30.72-15.36-5.12-30.72 5.12-30.72 20.48l-25.6 153.6c0 10.24 5.12 20.48 10.24 25.6 5.12 5.12 10.24 5.12 15.36 5.12h15.36l102.4-56.32c10.24-10.24 20.48-25.6 10.24-35.84-10.24-10.24-25.6-15.36-35.84-10.24zM527.36 742.4c-10.24-5.12-20.48-5.12-25.6 0l-76.8 40.96c-10.24 10.24-15.36 25.6-10.24 35.84 5.12 10.24 10.24 15.36 20.48 15.36h10.24l66.56-35.84 10.24 5.12c15.36 5.12 25.6 0 35.84-10.24s5.12-25.6-5.12-35.84l-25.6-15.36zM972.8 404.48c-5.12-5.12-10.24-15.36-20.48-15.36l-153.6-25.6c-15.36-5.12-25.6 5.12-30.72 20.48-5.12 15.36 5.12 30.72 20.48 30.72l102.4 15.36-15.36 15.36c-10.24 10.24-10.24 25.6 0 35.84 5.12 5.12 15.36 5.12 20.48 5.12 5.12 0 15.36 0 20.48-5.12l51.2-51.2c5.12-5.12 10.24-15.36 5.12-25.6zM634.88 384l56.32 10.24c10.24 0 25.6-10.24 20.48-25.6 5.12-15.36-5.12-30.72-20.48-30.72l-35.84-5.12-46.08-92.16c-10.24-10.24-25.6-20.48-35.84-10.24s-15.36 25.6-10.24 35.84l51.2 102.4c5.12 10.24 10.24 15.36 20.48 15.36zM450.56 225.28c0 5.12 5.12 5.12 10.24 5.12 10.24 0 20.48-5.12 20.48-15.36l30.72-56.32v10.24c10.24 10.24 25.6 15.36 35.84 10.24 10.24-10.24 15.36-25.6 10.24-35.84l-25.6-51.2c0-10.24-10.24-15.36-20.48-15.36s-20.48 5.12-20.48 10.24l-51.2 102.4c-5.12 15.36 0 30.72 10.24 35.84z" p-id="4839" fill="#ffffff"></path></svg>
        </span>
        <a href="/">
          <span class="mall-title">超新星手机市场</span>
        </a>
      </div>

    </div>

    <!--
      <el-form :model="form" ref="form" :rules="rules" label-width="80px" class="login-form">
        <h2 class="title">商城系统登录页面</h2>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" clearable show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="toLogin('form')" type="primary" plain>登录</el-button>
          <el-button type="danger" @click="toReg" plain>注册</el-button>
        </el-form-item>
      </el-form>
    -->

  </div>

  <div class="login-container">
    <div class="login-form">
      <el-header class="login-header" height="45px">
        <img src="@/assets/logo.jpeg" style="width: 45px; margin-right: 10px;">
        <span class="login-title" style="margin-right: 10px;">登录</span>
        
        <svg v-if="role === 'admin'" style="cursor: pointer;" @click="changeRole" t="1720667980384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25128" width="40" height="40"><path d="M497.4 915.6c-217.4 0-394.3-176.9-394.3-394.3S280 126.9 497.4 126.9s394.3 176.9 394.3 394.3-176.9 394.4-394.3 394.4z m0-746.9c-194.4 0-352.5 158.1-352.5 352.5S303 873.8 497.4 873.8s352.5-158.1 352.5-352.5-158.1-352.6-352.5-352.6z" fill="#707070" p-id="25129"></path><path d="M497.4 500.5m-43.4 0a43.4 43.4 0 1 0 86.8 0 43.4 43.4 0 1 0-86.8 0Z" fill="#707070" p-id="25130"></path><path d="M580.3 618.2c-4.5-41.8-39.9-74.3-82.9-74.3s-78.3 32.5-82.9 74.3h165.8z" fill="#707070" p-id="25131"></path><path d="M269.4 558.5c-5.3 0-10.7-2-14.8-6.1-8.2-8.2-8.2-21.4 0-29.5l228-228c8.2-8.2 21.4-8.2 29.5 0l228 228c8.2 8.2 8.2 21.4 0 29.5s-21.4 8.2-29.5 0L497.4 339.2 284.2 552.4c-4.1 4.1-9.4 6.1-14.8 6.1z" fill="#707070" p-id="25132"></path><path d="M649.4 720.3h-304c-11.5 0-20.9-9.4-20.9-20.9V467.1h41.8v211.4h262.2V467.1h41.8v232.3c0 11.5-9.3 20.9-20.9 20.9z" fill="#707070" p-id="25133"></path></svg>
        <svg v-if="role === 'user'" t="1720667447431" style="cursor: pointer; padding: 3.8px;" @click="changeRole" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14975" width="40" height="40"><path d="M648.932289 394.520497c0-75.264855-61.354215-136.342699-137.079687-136.342699s-137.079687 61.077844-137.079687 136.342699c0 75.541225 61.354215 136.61907 137.079687 136.61907S648.932289 470.061723 648.932289 394.520497zM769.890373 757.671119c0 12.620912-10.317826 23.215108-23.215108 23.215108-12.897282 0-23.491479-10.594196-23.491479-23.215108l-0.27637-2.303086 0.27637-2.579456c-14.463381-101.796407-102.072778-176.600645-208.751727-177.890373l-2.579456 0.27637-2.579456-0.27637c-105.389222 1.289728-192.261631 74.251497-208.29111 174.205435 0.552741 2.026716 1.013358 4.145555 1.013358 6.172271l0 2.303086c0 12.897282-10.594196 23.491479-23.491479 23.491479-13.173653 0-23.675725-10.594196-23.675725-23.491479l0-0.27637-0.552741 0 0.27637-2.026716c0-2.026716 0.27637-3.869185 0.736988-5.711654 12.068171-93.781667 75.264855-169.599263 161.308153-202.303086-50.299401-31.966836-82.726854-88.438508-82.726854-152.832796 0-99.493321 77.844311-180.377706 177.890373-180.377706 100.230309 0 177.890373 80.976509 177.890373 180.377706 0 64.394288-32.519576 120.86596-82.450484 152.832796 85.30631 32.519576 148.226624 107.508061 161.123906 200.27637 0.736988 2.579456 1.289728 5.158913 1.289728 7.738369L769.890373 757.671119z" p-id="14976" fill="#707070"></path><path d="M512 0C237.0152 0 14.385997 222.629203 14.385997 497.614003c0 274.9848 222.629203 497.614003 497.614003 497.614003S1009.614003 772.598802 1009.614003 497.614003C1009.614003 222.629203 786.9848 0 512 0zM512 941.929065c-245.269461 0-444.315062-199.045601-444.315062-444.315062 0-245.269461 199.045601-444.315062 444.315062-444.315062s444.315062 199.045601 444.315062 444.315062C956.315062 742.883464 757.741133 941.929065 512 941.929065z" p-id="14977" fill="#707070"></path></svg>
      </el-header>
      <div class="form">
        <el-form :model="form" status-icon :rules="rules" ref="form">
          <el-form-item prop="username">
            <el-input v-model="form.username" autocomplete="on" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item prop="password" style="margin-bottom: 10px;">
          <el-input type="password" show-password v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 5px;">
            <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          </el-form-item>
          <el-form-item style="margin-bottom: 10px;">
            <el-button type="success" class="submit" v-preventReClick @click="toLogin('form')">确认登录</el-button>
            
            <span class="pull-right" style="margin-left: 140px;">
              没有账号？
              <el-button type="primary" @click="toReg">点此注册</el-button>
            </span>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {

    return {
      rememberMe: false,
      role: 'user',
      form: {
        username: '',
        password: '',
        token: ''
      },
      rules: {
        username: [
          {required: true, message: '账号不能为空', trigger: 'blur'},
          {min: 2, max: 5, message: '长度在 2 到 6 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', onTrigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ]
      }
    };
  },

  methods: {
    toLogin() {
      axios.post("http://127.0.0.1:3000/user/account/token/", this.form, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(resp => {
        if(resp.data.error_message === 'success') {
          this.$message({
            message: "登录成功",
            showClose: true,
            type: "success",
            duration: 3000
          })
          this.form.token = resp.data.token;
          this.$store.dispatch('Login', this.form)

          this.$router.push("/")
        }
      })
      .catch(error => {
        console.log(error);
        this.$message({
          message: "用户名或密码错误",
          showClose: true,
          type: "error",
          duration: 3000
        })
      })
      .finally(() => {
      });
    },
    toReg() {
      this.$router.push("/reg")
    },
    changeRole() {
      if(this.role == 'user') {
        this.role = 'admin'
      } else {
        this.role = 'user'
      }
    }


    /*
    toLogin(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({
            message: "登录成功",
            showClose: true,
            type: "success",
            duration: 3000
          })
          this.$store.dispatch('Login',this.form)
          this.$router.push("/")
        } else {
          return false
        }
      })
    },
    */
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #9d9d9d;
}

a:hover {
  color: white;
}

.mall-title {
  color: white;
}

.container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #222222;
}

.login-container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 450px;
  height: 280px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
}

.login-title {
  font-size: 20px;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.container .left {
  display: flex;
  justify-content: center;
  width: 264px;
  svg {
    padding: 5px;
    margin: 0 15px;
  }
}

.header {
  line-height: 50px;
  background-color: #222222;
  display: flex;
}

a {
  text-decoration: none;
  color: #333;
}

.logo {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin: 0 10px 0 40px;
}
</style>