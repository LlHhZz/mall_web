import {USERINFO} from "@/constant";
import {getItem, setItem} from "@/utils/storage"
import {login} from "@/api/login";

const home = {
    // 存放状态
    state: {
        userinfo: getItem(USERINFO)
    },
    // 修改状态
    mutations: {
        //自定义方法
        SET_USERINFO(state, userInfo) {
            state.userinfo = userInfo
            setItem(USERINFO, userInfo)
        }
    },
    actions: {
        Login({commit}, loginForm) {
            // 从loginForm中提取出username和token保存
            const {username, token} = loginForm
            // login(username, password)
            login(username, token)
            //commit("SET_USERINFO", {username, password})
            commit("SET_USERINFO", {username, token})
        }
    }
}

export default home