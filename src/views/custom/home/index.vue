<template>
  <div class="container">
    <div class="warp">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in warpList" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-list">

      <div class="product-list">

        <el-row>
          <el-card :body-style="{ padding: '0px'}" v-for="product in productList" :key="product.id">
            <div class="product-item" @click="toProductDetail(product.id)">
              <div class="product-img">
                <img :src="product.image" class="product-image" alt="">
              </div>
              <div style="padding: 14px;">
                <span class="product-title">{{ product.title }}</span>
                <div class="bottom clearfix">
                  <el-button link  style="color: #e55757">
                    <span>￥</span>
                    <span>{{ product.price }}</span>
                  </el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-row>

      </div>

    </div>

  </div>
</template>

<script>
import {getWarpList} from "@/api/home"
import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

const warpList = ref([])
const productList = ref([])

export default {
  data() {

    return {
      warpList,
      productList
    }
  },
  setup() {
    const router = useRouter()
    warpList.value = getWarpList();

    return { router }
  },
  methods: {
    initData() {
      // let list = getProductList()
      axios.get("http://127.0.0.1:3000/product/getlist/", {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: "Bearer " + this.$store.state.home.userinfo.token
        }
      })
      .then(resp => {
        // console.log(resp)
        if(resp.status === 200) {
          productList.value = resp.data;
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
    },
    toProductDetail(id) {
      if(this.router) {
        this.router.push({path: "/product", query: {id: id}})
      }
    },
  },
  mounted() {
    if(this.$store.state.home.userinfo) {
      this.initData();
    } else {
      this.$message({
        message: '请登录',
        showClose: true,
        type: "error",
        duration: 3000
      })
    }

    let list = []
    list.forEach(item => {
      if (item.status === 10) {
        productList.value.push(item)
      }
    });
  }
}

</script>

<style scoped>
.container {
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 10px 0;
}

.warp {
  margin: 20px 0;
}

/*warp  */
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.product-list {
  padding-left: 5px;
}

.el-row {
  display: flex;
  flex-wrap: wrap;
}

.el-card {
  width: 335px;
  height: 150px;
  border: 1px solid black;
  margin: 0 20px 20px 0;
}

.product-list .product-item {
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
}

.product-img {
  width: 150px;
  height: 150px;
}

.product-img img {
  width: 150px;
  height: 150px;
}

.product-title {
  color: #666666;
}
</style>