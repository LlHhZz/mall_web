// 所有商品详情
const productList = require('@/data/product.json')

// 首页轮播图
const warpList = [
    require('@/assets/swapper/num1.png'),
    require('@/assets/swapper/num2.png'),
    require('@/assets/swapper/num3.png')
]

// 获取全部商品详情列表
export function getProductList() {
    return productList
}

// 获取全部轮播图列表
export function getWarpList() {
    return warpList
}