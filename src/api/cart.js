// 全部购物车内容
const productList = require("@/data/cart.json")

// 获取全部购物车列表
export function getList() {
    return productList
}

// 添加一个购物车表项
// input: (id↑), title(苹果), price(单价69.9), image(苹果.png), quantity(购买数量1), size(尺寸、颜色、数量等), amount(总价:prize * quantity)
export function add({title,price,image,quantity,size,amount}){
    let id =productList.length + 1
    // selected(是否被选中)
    let selected = false
    productList.push({id,title,price,image,quantity,amount,size,selected})
    console.log(productList.length)
}