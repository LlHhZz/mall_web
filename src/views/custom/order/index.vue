<template>
  <div class="container">
    <div class="order-list">

      <el-row>
        <el-col>
          <el-card :body-style="{ padding: '0px' }">
            <div class="order-list-header">
              <span style="font-size: 22px;margin-right: 20px">订单</span>
              <el-tabs v-model="default_nav_select" @tab-click="changeOrder">
                <el-tab-pane label="全部订单" name="10">全部订单</el-tab-pane>
                <el-tab-pane label="待付款" name="20">待付款</el-tab-pane>
                <el-tab-pane label="待发货" name="30">待发货</el-tab-pane>
                <el-tab-pane label="待收货" name="40">待收货</el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </el-col>

        <div v-if="orderList.length < 1">
          <h1>订单为空，快去购物吧</h1>
        </div>

        <el-col :span="24" v-for="(order,index) in orderList" :key="order.id">
          <el-card :body-style="{ padding: '0px' }">
            <div class="order-item">
              <div class="top">
                <div class="create-time">{{ order.creationTime }}</div>
                <div class="order-no">订单号: <span>#00000{{ order.id }}</span></div>

                <div class="order-status">
                  订单状态：
                  <span v-if="order.status === '10'" style="color: #f14f0f;">待发货</span>
                  <span v-if="order.status === '20'" style="color: #5cec7d;">待收货</span>
                  <span v-if="order.status === '30'" style="color: #47c715">交易完成</span>
                </div>

                <div class="info-order">
                  <el-button size="small" circle>
                    <el-icon><Search /></el-icon>
                  </el-button>
                </div>
                <div class="delete-order">
                  <el-button size="small" circle @click="remove(index)">
                    <el-icon><Delete /></el-icon>
                  </el-button>
                </div>
              </div>

              <div class="content">
                <img :src="order.image"
                     class="product-image" alt="">
                <span class="product-title">{{ order.title }}</span>
                <span class="product-price" style="color: #f14f0f;">单价：￥<span>{{ order.price }}</span></span>
                <span class="product-quantity" style="color: #23a9f2;">数量：<span>{{ order.quantity }}</span></span>
                <span class="order-amount" style="color: #f6cc59;">总价：<span>￥{{ order.amount }}</span></span>

                <el-button v-if="order.status === '20'" type="primary" plain @click="confirmReceipt(index)">确认收货
                </el-button>
                <el-button v-if="order.status === '10'" type="warning" plain @click="cancel(index)">取消订单</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="pages" v-if="orderList.length > 0">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="20">
      </el-pagination>
    </div>
  </div>
</template>

<script setup>

// import {getOrderList} from '@/api/order'
import {ref} from "vue";
import {Delete} from "@element-plus/icons-vue";
import axios from "axios";
import { useStore } from "vuex";
import {ElMessage} from "element-plus";

const orderList = ref([])
const store = useStore()
const default_nav_select = ref("10")

const initData = () => {
  // orderList.value = JSON.parse(JSON.stringify(getOrderList()))
  axios.post("http://127.0.0.1:3000/order/getlist/byUsername/", {
    username: store.state.home.userinfo.username
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    }
  })
  .then(resp => {
    console.log(resp)
    if(resp.status === 200) {
      orderList.value = resp.data;
      console.log(resp.data)
    }
  })
  .catch(error => {
    console.log(error);
    ElMessage({
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

const changeOrder = (tab) => {
  let tabName = tab.props.name
  initData()
  if (tabName === "10") {
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

/*
// 支付
const toPayOrder = (index) => {
  orderList.value[index].status = 30
}
*/

const cancel = (index) => {
  orderList.value[index].status = 10
}

const remove = (index) => {
  orderList.value.splice(index, 1)
}

const confirmReceipt = (index) => {
  orderList.value[index].status = 50
}
</script>

<style scoped>
.container {
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 10px 0;
}

.category-content {
  margin: 20px 0;
  width: 1280px;
  height: 300px;
  background-color: #e55757;
  border: 1px solid black;
}

.order-list {
  padding-left: 10px;
}

.order-list .el-card {
  border: 1px solid black;
  width: 1280px;
  margin-bottom: 10px;
}

.order-list-header {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 10px 20px;
}

.all-check {
  margin: 0 20px;
}

.info-order {
  margin-right: 100px;
}

.order-list .order-item {
  height: 130px;
  padding: 10px 20px;
}

.order-list .order-item .top {
  display: flex;
  color: #666666;
  font-size: 14px;
}

.order-list .order-item .top .create-time, .order-no, .order-status {
  width: 300px;
  margin-right: 50px;
}

.order-list .order-item .content {
  display: flex;
  align-items: center;
  height: 90px;
}

.order-list .product-image {
  width: 80px;
  height: 80px;
}

.product-title {
  font-size: 14px;
  color: #666;
  width: 210px;
  margin: 0 20px;
}

.product-price {
  color: #999999;
  margin: 0 20px;
}

.product-quantity {
  color: #999999;
  margin: 0 70px;
}

.order-amount {
  color: #999999;
  margin: 0 30px;
  margin-right: 240px;
}

.pages {
  margin: 30px 0 50px;
}
</style>