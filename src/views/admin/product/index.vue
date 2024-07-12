<template>
  <div class="container">
    <div class="admin-header">
      <div class="admin-nav">
        <el-tabs v-model="default_nav" @tab-click="changeTab">
          <el-tab-pane label="商品列表" name="30">商品列表</el-tab-pane>
          <el-tab-pane label="下架商品" name="10">下架商品</el-tab-pane>
          <el-tab-pane label="上架商品" name="20">上架商品</el-tab-pane>
        </el-tabs>
      </div>
      <div class="admin-options">
        <el-button @click="dialogFormVisible = true">添加商品</el-button>
      </div>
      <div class="admin-search">
        <el-form :inline="true" ref="search" :model="search" class="demo-form-inline">
          <el-form-item prop="productName">
            <el-input v-model="search.productName" placeholder="商品名" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="admin-content">

      <el-table
          :data="productList"
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
            label="商品名"
            show-overflow-tooltip
            width="150">
        </el-table-column>

        <el-table-column
            prop="price"
            label="商品价格"
            width="150">
        </el-table-column>

        <el-table-column prop="image" label="商品图片" width="150">
          <template v-slot="{ row }">
            <img v-if="row.image" :src="row.image" alt="图片" style="width: 50px; height: 50px; border-radius: 50%;">
            <span v-else>无图片</span>
          </template>
        </el-table-column>

        <el-table-column
            prop="stock"
            label="商品库存"
            width="150">
        </el-table-column>

        <el-table-column
            prop="descb"
            label="描述"
            show-overflow-tooltip
            width="220">
        </el-table-column>

        <el-table-column
            prop="status"
            label="状态"
            show-overflow-tooltip
            width="100">
            <template v-slot="{ row }">
              <span v-if="row.status === '10'" style="color: #e64e3e;">待上架</span>
              <span v-else style="color: #21d86d;">已上架</span>
            </template>
        </el-table-column>

        <el-table-column
            fixed="right"
            label="操作"
            width="250">
          <template v-slot="scope">
            <el-button link size="small">查看详情</el-button>
            <el-button link size="small">编辑</el-button>
            <el-button link size="small" style="color: #e55757"
                       @click="upSeal(scope.$index)">下架
            </el-button>
            <el-button link size="small" style="color: #ffb73d"
                       @click="downSeal(scope.$index)">上架
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

    <!--  添加商品  -->
    <el-dialog title="添加商品" v-model="dialogFormVisible">
      <el-form>

        <el-form-item label="商品名称">
          <el-input type="text" minlength="1" maxlength="100" v-model="newProduct.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="商品价格">
          <el-input-number v-model="newProduct.price" :precision="2" :step="0.01" :min="0.01" :max="1000000000"
                           autocomplete="off"></el-input-number>
        </el-form-item>

        <el-form-item label="商品图片">
          <!--
          <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              accept=".jpg,.png"
              :multiple="false"
              :limit="1">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          -->
          <input type="file" class="form-control" @change="displayAvatar" />
          <img id="avatar-preview" style="display: flex; max-width: 150px; height: auto; margin: 20px 10% 20px 35%;">
        </el-form-item>

        <el-form-item label="款式规格">
          <el-input type="textarea" minlength="1" maxlength="150" v-model="newProduct.size"
                    autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="商品库存">
          <el-input-number v-model="newProduct.stock" :precision="0" :step="1" :min="1" :max="100000"
                           autocomplete="off"></el-input-number>
        </el-form-item>

        <el-form-item label="商品描述">
          <el-input type="textarea" minlength="1" maxlength="150" v-model="newProduct.descb"
                    autocomplete="off"></el-input>
        </el-form-item>

      </el-form>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addProduct">
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import axios from 'axios';
// import {getProductList} from '@/api/product'
import {ref} from "vue";
import {ElMessage} from "element-plus";
import { useStore } from 'vuex';

const store = useStore()

const default_nav = ref("30")
const dialogFormVisible = ref(false)
// const dialogImageUrl = ref("")
const newProduct = ref({
  title: '',
  descb: '',
  size: '',
  stock: 0,
  price: 0,
  status: 10,
})

const formData = new FormData();
const displayAvatar = (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('avatar-preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
        console.log(input.files[0]);

        formData.append('photo', input.files[0]);
    }
};

const search = ref({
  productName: ""
})
const productList = ref([])

const initData = () => {
  // productList.value = getProductList()
  axios.get("http://127.0.0.1:3000/product/getlist/", {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + store.state.home.userinfo.token
    }
  })
  .then(resp => {
    console.log(resp)
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
  initData()
  let tabName = tab.props.name
  if (tabName === "30") {
    return
  }
  let list = []
  for (let i = 0; i < productList.value.length; i++) {
    if (tabName === (productList.value[i].status + "")) {
      list.push(productList.value[i])
    }
  }
  productList.value = list
}

const upSeal = (index) => {
  productList.value[index].status = 10
}

const downSeal = (index) => {
  productList.value[index].status = 20
}

const addProduct = () => {
  dialogFormVisible.value = false
  
  formData.append('title', newProduct.value.title)
  formData.append('stock', newProduct.value.stock)
  formData.append('price', newProduct.value.price)
  formData.append('descb', newProduct.value.descb)
  formData.append('size', newProduct.value.size)
  formData.append('status', newProduct.value.status)

  axios.post("http://127.0.0.1:3000/product/add/", formData, {
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
        message: "商品添加成功",
        showClose: true,
        duration: 3000,
        type: "success"
      })
    }
  })
  .catch(error => {
    console.log(error);
    ElMessage({
      message: "添加商品出错",
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
.admin-header {
  display: flex;
}

.admin-nav {
  border: 1px solid #666666;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  margin-right: 20px;
}

.admin-options {
  border: 1px solid #666666;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
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