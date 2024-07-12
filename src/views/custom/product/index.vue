<template>
  <div class="container">
    
    <div class="header" v-if="product">

      <div class="left">
        <img v-if="product.image" :src="product.image" alt="">
      </div>
      <div class="right">
        <div class="title">
          <h4>商品名</h4>
          <span>{{ product.title }}</span>
        </div>
        <div class="descb">
          <h4>商品描述</h4>
          <span>{{ product.descb ? product.descb : '暂无描述' }}</span>
        </div>
        <div class="size">
          <h4>商品款式</h4>
          <span>{{ product.size }}</span>
          <div class="size-list">

            <!--
            <span v-for="(item,index) in product.sizeList" :key="index" class="size-list-item"
                  @click="sizeChange(index)"
                  :class="{active:index === currentId}">{{ item.title }}</span>
            -->
            
          </div>
        </div>
        <div class="price">
          <h4>商品价格</h4>
          <span style="color: #e55757">
            <span>￥</span>
            <span>{{ product.price }}</span>
          </span>
        </div>
        <div class="price">
          <h4>商品容量</h4>
          <span>
            {{ product.stock }}
          </span>
        </div>
        <div class="quantity">
          <el-input-number v-model="selectQuantity" :min="1" :max="product.stock" :step="1"></el-input-number>
        </div>
        <div class="price">
          <h4>商品总价</h4>
          <span style="color: #ff7d27">
            <span>￥</span>
            <span>{{ product.price * selectQuantity }}</span>
          </span>
        </div>
        <div class="options">
          <el-button type="danger" plain @click="addToCart">添加到购物车</el-button>

          <el-button type="success" @click="dialogFormVisible = true">立即购买</el-button>
          <!--  立即购买  -->
            <el-dialog title="确认订单" v-model="dialogFormVisible">
              <el-form>

                <el-form-item label="商品名称">
                  <span>
                    {{ product.title }}
                  </span>
                </el-form-item>

                <el-form-item label="商品单价">
                  <span style="color: #e55757">
                    <span>￥</span>
                    <span>{{ product.price }}</span>
                  </span>
                </el-form-item>

                <el-form-item label="商品图片">
                  <img :src="product.image" style="display: flex; max-width: 150px; height: auto; margin: 20px 10% 20px 35%;">
                </el-form-item>

                <el-form-item label="款式规格">
                  <span>
                    {{ product.size }}
                  </span>
                </el-form-item>

                <el-form-item label="购买数量">
                  <span>
                    {{ selectQuantity }}
                  </span>
                </el-form-item>

                <el-form-item label="购买总价">
                  <span style="color: #ff7d27">
                    <span>￥</span>
                    <span>{{ product.price * selectQuantity }}</span>
                  </span>
                </el-form-item>

                <el-form-item label="收货地址">
                  <el-input type="textarea" minlength="1" maxlength="150" v-model="deliveryAddress"
                    autocomplete="off"></el-input>
                </el-form-item>

              </el-form>

              <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="addOrder">
                  确定
                </el-button>
              </span>
              </template>
            </el-dialog>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
// import {getProductList} from "@/api/product"
// import {add} from "@/api/cart"
import {ref} from "vue";

import {useRoute} from "vue-router";
import { useStore } from "vuex";
import {ElMessage} from "element-plus";
import axios from "axios";

const route = useRoute()
const store = useStore()

const dialogFormVisible = ref(false);

const productId = route.query["id"]
// console.log(productId)

const product = ref({
  id: 1,
  title: "",
  stock: 1,
  desc: "",
  image: "",
  price: 1,
  sizeList: [],
  status: 1
})

const selectQuantity = ref(1)
// const currentId = ref(0)

const deliveryAddress = ref('')

const list = ref([])
// const selectSize = ref("")

const initData = () => {
  // list.value = getProductList()
  axios.get("http://127.0.0.1:3000/product/getlist/", {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    }
  })
  .then(resp => {
    // console.log(resp)
    if(resp.status === 200) {
      list.value = resp.data;

      list.value.forEach(item => {
        if (productId + "" === item.id + "") {
          product.value = item
          console.log(product.value)
        }
      })
    }
  })
  .catch(error => {
    console.log(error);
    this.$message({
      message: '获取商品列表出错',
      showClose: true,
      type: "error",
      duration: 3000
    })
  })
  .finally(() => {
  });
}

initData()

/*
const sizeChange = (index) => {
  currentId.value = index
  selectSize.value = product.value.sizeList[index].title
}
*/

const addToCart = () => {
  let {title,price,image,size} = product.value
  let quantity = selectQuantity.value
  let amount = quantity * price

  axios.post("http://127.0.0.1:3000/cart/add/", {
    username: store.state.home.userinfo.username,
    title: title,
    price: price,
    image: image,
    quantity: quantity,
    amount: amount,
    size: size,
    selected: false
  }, {
    processData: false,
    contentType: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    },
  })
  .then(resp => {
    console.log(resp)
    if(resp.data.error_message === 'success') {
      ElMessage({
        message: "成功添加到购物车",
        showClose: true,
        duration: 3000,
        type: "success"
      })
    }
  })
  .catch(error => {
    console.log(error);
    ElMessage({
      message: "添加购物车出错",
      showClose: true,
      duration: 3000,
      type: "error"
    })
  })
  .finally(() => {
  });

}

const addOrder = () => {
  dialogFormVisible.value = false

  let {title,price,image,size} = product.value
  let quantity = selectQuantity.value
  let amount = quantity * price

  axios.post("http://127.0.0.1:3000/order/add/", {
    username: store.state.home.userinfo.username,
    title: title,
    price: price,
    quantity: quantity,
    size: size,
    amount: amount,
    image: image,
    status: 10,
    deliveryAddress: deliveryAddress.value
  }, {
    processData: false,
    contentType: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    },
  })
  .then(resp => {
    console.log(resp)
    if(resp.data.error_message === 'success') {
      ElMessage({
        message: "购买成功",
        showClose: true,
        duration: 3000,
        type: "success"
      })
    }
  })
  .catch(error => {
    console.log(error);
    ElMessage({
      message: "购买出错",
      showClose: true,
      duration: 3000,
      type: "error"
    })
  })
  .finally(() => {
  });
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 1280px;
  height: 640px;
  padding: 20px;
  border: 1px solid #999999;
  border-radius: 20px;
}

.header .left img {
  width: 600px;
  height: 600px;
}

.header .right {
  width: 600px;
  height: 600px;
  padding: 0 20px;
}

.header .right .title, .descb, .price, .size, .quantity, .options {
  margin-bottom: 20px;
}

.header .right h4 {
  margin-bottom: 10px;
}

.header .right .size-list {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}

.size-list-item {
  border: 1px solid #999999;
  padding: 5px 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
}

.active {
  background-color: red;
}
</style>