<script setup>
import { ref } from 'vue'
const rules = {
    nickname: [
        { required: true, message: '请输入用户昵称', trigger: 'blur' },
        {
            pattern: /^\S{2,10}$/,
            message: '昵称必须是2-10位的非空字符串',
            trigger: 'blur'
        }
    ],
    email: [
        { required: true, message: '请输入用户邮箱', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
    ]
}

import useUserInfoStore from '@/store/userInfo.js'
import { ElMessage } from 'element-plus';
import { updateUserInfoService } from '@/api/user';
const userInfoStore = useUserInfoStore();

const setUserInfo = async () => {
    let res = await updateUserInfoService(userInfo.value)
    userInfoStore.info.nickname = userInfo.value.nickname;
    userInfoStore.info.email = userInfo.value.email;
    ElMessage.success(res.msg ? res.msg : '修改成功');
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>基本资料</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form :model="userInfo" :rules="rules" label-width="120px" size="large">
                    <el-form-item label="原密码" prop="nickname">
                        <el-input placeholder="请输入原密码"></el-input>
                    </el-form-item>
                    <el-form-item  label="新密码" prop="email">
                        <el-input placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="email">
                        <el-input placeholder="请再次输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="setUserInfo()">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>