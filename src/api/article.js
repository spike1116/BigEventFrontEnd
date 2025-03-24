import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token'

//文章分类列表查询
export const articlaCategoryListService = () => {
    // const tokenStore = useTokenStore();
    //在Pinia中定义的响应式数据都不需要.value可以直接使用
    //目前已经在拦截器中统一加了token处理，所以这里不需要再单独传入token
    // return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category')
}

export const articleAddCategoryService = (categoryData) => {
    return request.post('/category', categoryData)
}

export const articleUpdateCategoryService = (categoryData) => {
    return request.put('/category', categoryData)
}

export const articleDeleteCategoryService = (id) => {
    return request.delete('/category?id=' + id)
}

export const articleListService = (params) => {
    return request.get('/article', { params: params })
}

export const articleAddService = (articleData) => {
    return request.post('/article', articleData)
}

export const articleEditService = (articleData) => {
    return request.put('/article', articleData)
}

export const articleDeleteService = (id) => {
    return request.delete("/article?id=" + id)
}