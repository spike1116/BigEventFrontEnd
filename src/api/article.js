import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token'

//文章分类列表查询
export const articlaCategoryListService = ()=>{
    const tokenStore = useTokenStore();
    //在Pinia中定义的响应式数据都不需要.value可以直接使用
    // return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category')
}