//导入vue-router
import { createRouter,createWebHistory } from "vue-router";

import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
import ArticleCategortVue from '@/views/article/ArticleCategory.vue'
import ArticleManageVue from '@/views/article/ArticleManage.vue'
import UserAvatartVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'


const routes = [
    {path:'/login',component:LoginVue},
    {path:'/',component:LayoutVue,redirect:'/article/manage',children:[
        {path:'/article/category',component:ArticleCategortVue},
        {path:'/article/manage',component:ArticleManageVue},
        {path:'/user/info',component:UserInfoVue},
        {path:'/user/resetpassword',component:UserResetPasswordVue},
        {path:'/user/avatar',component:UserAvatartVue},

    ]}
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router