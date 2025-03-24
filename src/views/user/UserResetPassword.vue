<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { resetUserPassWordService } from '@/api/user'

const passwordFormRef = ref(null)

const pwdModel = reactive({
    oldPwd: '',
    newPwd: '',
    reNewPwd: ''
})

// 自定义密码验证规则
const validateConfirmPassword = (rule, value, callback) => {
    if (value !== pwdModel.newPwd) {
        callback(new Error('两次输入的密码不一致'))
    } else {
        callback()
    }
}

// 验证规则
const rules = reactive({
    oldPwd: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
    newPwd: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, message: '密码长度至少6位', trigger: 'blur' }
    ],
    reNewPwd: [
        { required: true, message: '请确认新密码', trigger: 'blur' },
        { validator: validateConfirmPassword, trigger: 'blur' }
    ]
})

// 提交表单
const submitForm = () => {
    passwordFormRef.value.validate(valid => {
        if (valid) {
            resetUserPassWordService(pwdModel)
                .then(res => {
                    ElMessage.success(res.msg || '密码修改成功')
                    resetStatus()
                })
                .catch(err => {
                    ElMessage.error(err.message || '修改失败')
                })
        }
    })
}

// 重置表单
import { useRouter } from 'vue-router';
import { useTokenStore } from '@/store/token';
import useUserInfoStore from '@/store/userInfo.js'
const userInfoStore = useUserInfoStore();
const tokenStore = useTokenStore();
const router = useRouter();
const resetStatus = () => {
    tokenStore.removeToken();
    userInfoStore.removeInfo();
    router.push('/login')
}
</script>

<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>重设密码</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form ref="passwordFormRef" :model="pwdModel" :rules="rules" label-width="120px" size="large">
                    <el-form-item label="原密码" prop="oldPwd">
                        <el-input v-model="pwdModel.oldPwd" type="password" show-password
                            placeholder="请输入原密码"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPwd">
                        <el-input v-model="pwdModel.newPwd" type="password" show-password
                            placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="reNewPwd">
                        <el-input v-model="pwdModel.reNewPwd" type="password" show-password
                            placeholder="请再次输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">提交修改</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>
