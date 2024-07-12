// 所有商品类别
const categoryList = require("@/data/category.json")

// 所有商品详情
const productList = require("@/data/product.json")

// 获取全部商品类别列表
export function getCategoryList(){
    return categoryList
}

// 获取全部商品详情列表
export function getProductList(){
    return productList
}