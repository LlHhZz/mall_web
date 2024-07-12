<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <span>
          <svg t="1720659831675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4838" width="45" height="45"><path d="M419.84 281.6c-15.36-5.12-30.72 0-35.84 10.24l-20.48 40.96-87.04 15.36c-15.36 5.12-20.48 15.36-20.48 30.72 0 10.24 15.36 20.48 25.6 20.48l107.52-15.36c5.12 0 15.36-5.12 15.36-15.36l25.6-51.2c5.12-15.36 0-30.72-10.24-35.84zM204.8 394.24c-5.12-15.36-15.36-20.48-30.72-20.48l-102.4 15.36c-10.24 0-15.36 5.12-20.48 15.36-5.12 10.24 0 20.48 5.12 25.6l51.2 51.2c5.12 5.12 15.36 5.12 20.48 5.12h20.48c10.24-10.24 10.24-25.6 0-35.84l-15.36-15.36 51.2-10.24c15.36-5.12 25.6-15.36 20.48-30.72zM757.76 742.4c20.48-5.12 30.72-15.36 25.6-30.72L768 624.64l40.96-40.96c10.24-10.24 10.24-25.6 0-35.84-10.24-10.24-25.6-10.24-35.84 0l-51.2 51.2c-5.12 5.12-5.12 10.24-5.12 20.48l15.36 102.4c0 10.24 15.36 20.48 25.6 20.48zM773.12 788.48c-15.36 5.12-20.48 15.36-20.48 30.72l10.24 51.2-107.52-56.32c-15.36-5.12-30.72-5.12-35.84 10.24-5.12 15.36 0 30.72 10.24 35.84l153.6 81.92c0 5.12 5.12 5.12 10.24 5.12s10.24 0 15.36-10.24c10.24-5.12 10.24-15.36 10.24-25.6l-15.36-102.4c-5.12-15.36-15.36-25.6-30.72-20.48zM250.88 624.64l-5.12 35.84c0 15.36 5.12 25.6 25.6 30.72 15.36 0 25.6-10.24 25.6-20.48l10.24-51.2c0-10.24 0-15.36-10.24-20.48l-51.2-51.2c-10.24-10.24-25.6-10.24-35.84 0-10.24 10.24-10.24 25.6 0 35.84l40.96 40.96zM322.56 844.8l-56.32 30.72 15.36-102.4c5.12-15.36-5.12-30.72-20.48-30.72-15.36-5.12-30.72 5.12-30.72 20.48l-25.6 153.6c0 10.24 5.12 20.48 10.24 25.6 5.12 5.12 10.24 5.12 15.36 5.12h15.36l102.4-56.32c10.24-10.24 20.48-25.6 10.24-35.84-10.24-10.24-25.6-15.36-35.84-10.24zM527.36 742.4c-10.24-5.12-20.48-5.12-25.6 0l-76.8 40.96c-10.24 10.24-15.36 25.6-10.24 35.84 5.12 10.24 10.24 15.36 20.48 15.36h10.24l66.56-35.84 10.24 5.12c15.36 5.12 25.6 0 35.84-10.24s5.12-25.6-5.12-35.84l-25.6-15.36zM972.8 404.48c-5.12-5.12-10.24-15.36-20.48-15.36l-153.6-25.6c-15.36-5.12-25.6 5.12-30.72 20.48-5.12 15.36 5.12 30.72 20.48 30.72l102.4 15.36-15.36 15.36c-10.24 10.24-10.24 25.6 0 35.84 5.12 5.12 15.36 5.12 20.48 5.12 5.12 0 15.36 0 20.48-5.12l51.2-51.2c5.12-5.12 10.24-15.36 5.12-25.6zM634.88 384l56.32 10.24c10.24 0 25.6-10.24 20.48-25.6 5.12-15.36-5.12-30.72-20.48-30.72l-35.84-5.12-46.08-92.16c-10.24-10.24-25.6-20.48-35.84-10.24s-15.36 25.6-10.24 35.84l51.2 102.4c5.12 10.24 10.24 15.36 20.48 15.36zM450.56 225.28c0 5.12 5.12 5.12 10.24 5.12 10.24 0 20.48-5.12 20.48-15.36l30.72-56.32v10.24c10.24 10.24 25.6 15.36 35.84 10.24 10.24-10.24 15.36-25.6 10.24-35.84l-25.6-51.2c0-10.24-10.24-15.36-20.48-15.36s-20.48 5.12-20.48 10.24l-51.2 102.4c-5.12 15.36 0 30.72 10.24 35.84z" p-id="4839" fill="#ffffff"></path></svg>
        </span>
        <a href="/">
          <span class="mall-title">超新星手机市场</span>
        </a>
      </div>
      <div class="middle">
        <span class="nav-span" :class="{'active':$route.path === '/'}"><router-link class="nav-link"
                                                                                    to="/">商城首页</router-link></span>

        <!--
            <span class="nav-span" :class="{'active':$route.path === '/category'}"><router-link class="nav-link"
                                                                                            to="/category">分类</router-link></span>                                                                        
        -->
        
            
        <span v-if="userinfo" class="nav-span" :class="{'active':$route.path === '/cart'}"><router-link class="nav-link"
                                                                                        to="/cart">我的购物车</router-link></span>
        <span v-if="userinfo" class="nav-span" :class="{'active':$route.path === '/order'}"><router-link class="nav-link"
                                                                                         to="/order">我的订单</router-link></span>
        <span v-if="userinfo" class="nav-span" :class="{'active':$route.path === '/admin'}"><router-link class="nav-link"
                                                                                         to="/admin">管理</router-link></span>
      </div>

      <div class="right">
        <el-dropdown @command="handleCommand">
          <div class="el-dropdown-link nickname">
            <div style="line-height: 50px;" v-if="!userinfo">
              请登录
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
            <div style="line-height: 50px" v-if="userinfo">
              {{ userinfo.username }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div v-if="!userinfo" @click="toLogin">登录</div>
              </el-dropdown-item>
              <el-dropdown-item v-if="userinfo" command="updatePwd">修改密码</el-dropdown-item>
              <el-dropdown-item v-if="userinfo" command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <el-dialog title="修改密码" v-model="dialogFormVisible" width="500px">

      <el-form :model="pwdForm" ref="pwdForm" :rules="updatePwdRules" label-width="80px" style="width: 400px">

        <el-form-item label="旧密码" prop="oldPwd">
          <el-input v-model="pwdForm.oldPwd" type="password" autocomplete="off" show-password clearable></el-input>
        </el-form-item>

        <el-form-item label="新密码" prop="password">
          <el-input v-model="pwdForm.password" type="password" autocomplete="off" clearable show-password></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input v-model="pwdForm.confirmPwd" type="password" autocomplete="off" clearable show-password></el-input>
        </el-form-item>


        <el-form-item>
          <el-button @click="updatePwd('pwdForm')" type="primary">提交</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

  </div>
</template>

<script setup>
import {logout} from "@/api/login";
import {ref,reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";

const store = useStore()
const router = useRouter()
const dialogFormVisible = ref(false)
const pwdForm = ref({
  oldPwd: '',
  password: '',
  confirmPwd: ''
})
const userinfo = ref({})

const initData = () => {
  userinfo.value = store.state.home.userinfo
}
initData()

const checkedPwd = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== pwdForm.value.password) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}

const updatePwdRules = reactive({
  oldPwd: [
    {required: true, message: '旧密码不能为空', onTrigger: 'blur'},
    {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '新密码不能为空', onTrigger: 'blur'},
    {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
  ],
  confirmPwd: [
    {required: true, validator: checkedPwd, onTrigger: "blur"},
  ]
})

const handleCommand = (command)=>{
  switch (command) {
    case 'updatePwd':
      // 打开修改密码窗口
      handlePwd()
      break;
    case 'logout':
      // 退出系统
      toLogout()
      break;
    default:
      break;
  }
}

const toLogin = ()=>{
  router.push("/login")
}

const toLogout = () => {
  logout()
  router.push("/login")
  ElMessage({
    message: "已退出登录",
    type: "info",
    showClose: true,
  })
}

const resetForm = () => {
  pwdForm.value = {
    oldPwd: '',
    password: '',
    confirmPwd: ''
  }
}

const handlePwd = () => {
  dialogFormVisible.value = true
  resetForm()
}

const updatePwd = () => {
  dialogFormVisible.value = false
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

.logo {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin: 0 10px 0 40px;
}

.container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #222222;
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

.container .middle {
  width: 1480px;
  display: flex;
  justify-content: left;
}

.nav-span {
  text-align: center;
  width: 150px;
}

.nav-link {
  display: inline-block;
  width: 100%;
}

.active {
  background-color: #000;
  a {
    color: #fff;
  }
}

.nav-span:hover {
  background-color: rgba(0, 0, 0, 0.55);
  a {
    color: #fff;
  }
}

.container .right {
  margin-right: 40px;
  cursor: pointer;
}

.el-dropdown {
  display: flex;
  width: 100px;
  color: #fff;
}

.nickname {
  font-size: 18px;
  display: flex;
  align-items: center;
}
</style>