<template>
  <div class="container">
    <div class="admin-header">
      <div class="admin-nav">
        <el-tabs v-model="default_nav" @tab-click="changeTab">
          <el-tab-pane label="订单列表" name="80">订单列表</el-tab-pane>
          <el-tab-pane label="待支付" name="20">待支付</el-tab-pane>
          <el-tab-pane label="待发货" name="30">待发货</el-tab-pane>
          <el-tab-pane label="待收货" name="40">待收货</el-tab-pane>
          <el-tab-pane label="交易完成" name="50">交易完成</el-tab-pane>
        </el-tabs>
      </div>

      <div class="admin-search">
        <el-form :inline="true" ref="search" :model="search" class="demo-form-inline">
          <el-form-item prop="username">
            <el-input v-model="search.username" placeholder="订单号" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="admin-content">
      <el-table
          :data="orderList"
          border
          style="width: 100%">

        <el-table-column
            fixed
            prop="index"
            label="序号"
            width="80">
          <template v-slot="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>

        <el-table-column
            prop="title"
            label="商品名称"
            width="130">
        </el-table-column>

        <el-table-column
            prop="username"
            label="用户账号"
            width="130">
        </el-table-column>

        <el-table-column
            prop="price"
            label="商品单价"
            width="120">
        </el-table-column>

        <el-table-column prop="photo" label="商品图片" width="100">
          <template v-slot="{ row }">
            <img v-if="row.image" :src="row.image" alt="图片" style="width: 50px; height: 50px; border-radius: 50%;">
            <span v-else>无图片</span>
          </template>
        </el-table-column>

        <el-table-column
            prop="quantity"
            label="商品数量"
            width="115">
        </el-table-column>

        <el-table-column
            prop="amount"
            label="订单总价"
            show-overflow-tooltip
            width="130">
        </el-table-column>

        <el-table-column
            prop="creationTime"
            label="交易时间"
            show-overflow-tooltip
            width="200">
        </el-table-column>

        <el-table-column
            prop="updateTime"
            label="订单状态变更时间"
            show-overflow-tooltip
            width="200">
        </el-table-column>

        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template v-slot="scope">
            <el-button link  size="small">查看</el-button>
            <el-button v-if="scope.row.status === '10'" link  size="small" @click="sendProduct(scope.$index)" style="color: #e55757;">发货
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>

  </div>
</template>

<script setup>

// import {getOrderList} from "@/api/order"
import {ref} from "vue";
import {ElMessage} from "element-plus";
import axios from "axios";
import { useStore } from "vuex";

const store = useStore()

const default_nav = ref("80")
const orderList = ref([])
const search = ref({
  orderNo: ""
})

const initData = () => {
  // orderList.value = getOrderList()
  axios.get("http://127.0.0.1:3000/order/getlist/all/", {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    }
  })
  .then(resp => {
    console.log(resp)
    if(resp.status === 200) {
      orderList.value = resp.data;
    }
  })
  .catch(error => {
    console.log(error);
    this.$message({
      message: '获取订单列表出错',
      showClose: true,
      type: "error",
      duration: 3000
    })
  })
  .finally(() => {
  });
}

initData()

const toSearch = () => {
  ElMessage({
    message: "后台无数据",
    showClose: true,
    duration: 3000,
    type: "error"
  })
}

const changeTab = (tab) => {
  let tabName = tab.props.name
  initData()
  if (tabName === "80") {
    return
  }
  let list = []
  for (let i = 0; i < orderList.value.length; i++) {
    if (tabName === (orderList.value[i].status + "")) {
      list.push(orderList.value[i])
    }
  }
  orderList.value = list
}

const sendProduct = (index) => {
  orderList.value[index].status = 40
}

</script>

<style scoped>
.admin-header {
  display: flex;
}

.admin-nav {
  border: 1px solid #666666;
  padding: 20px;
  border-radius: 10px;
  width: 450px;
  margin-right: 20px;
}

.admin-search {
  border: 1px solid #666666;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

.admin-content {
  margin-top: 20px;
  border: 1px solid #666666;
  padding: 20px;
  border-radius: 10px;
  width: 1350px;
}

.el-pagination {
  margin: 20px;
}
</style>