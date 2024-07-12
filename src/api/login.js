import {setItem,removeItem} from "@/utils/storage"

// USERINFO常量
import {USERINFO} from "@/constant"

// 通过username和password登录
export function login(username, token){
    let userinfo = {username, token}
    userinfo.username = username
    // userinfo.password = password
    userinfo.token = token

    // 设置当前用户的USERINFO
    // setItem(USERINFO,{username,password})
    setItem(USERINFO,{username, token})
}

// 登出直接删除即可
export function logout(){
    removeItem(USERINFO)
}
