<template>
  <div>
    <van-nav-bar class="page-nav-bar" title="登陆" left-arrow />
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field name="mobile" placeholder="请输入用户名" v-model="user.mobile" :rules="userFormRules.mobile" type="number" maxlength="11">
        <i slot="left-icon" class="iconfont iconshouji"></i>
      </van-field>
      <van-field type="number" name="code" placeholder="请输入密码" v-model="user.code" :rules="userFormRules.code" maxlength="6">
        <i slot="left-icon" class="iconfont iconshouji"></i>
        <template #button>
          <van-count-down :time="time" v-if="isCountDown" @finish="isCountDown = false" format="ss s" />
          <van-button size="small" type="default" round class="btnyz" native-type="button" @click="onSenSms" v-else>发送验证码</van-button>
          <van-button size="small" type="danger" round class="btnyzz" native-type="button" @click="onSenSmss">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendSms } from '@/api/user.js'
export default {
  name: 'loginPage',
  data() {
    return {
      isCountDown: false,
      time: 3 * 1000,
      user: {
        mobile: '',
        code: ''
        // mobile: 15061535623,
        // code: 246810
      },
      userFormRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号码格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    async onSubmit(e) {
      const user = this.user
      console.log(e)
      this.$toast.loading({
        message: '登陆中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data: res } = await login(user)
        console.log(res)
        this.$toast.success('登陆成功')
        this.$store.commit('setUser', res.data)
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        if (err.request.status === 400) {
          this.$toast.fail('验证失败')
        } else {
          this.$toast.fail('未知错误')
        }
      }
    },
    onSenSmss() {
      setInterval(() => {
        this.onSenSms()
      }, 61000)
    },
    async onSenSms() {
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (err) {
        return console.log('失败', err)
      }
      this.isCountDown = true
      console.log(1)
      try {
        const res = await sendSms(this.user.mobile)
        console.log(res)
      } catch (err) {
        if (err.request.status === 429) {
          console.log('发送太频繁了')
        }
      }
    }
  },
  async onSenSms() {
    try {
      await this.$refs.loginForm.validate('mobile')
      console.log('验证通过')
    } catch (err) {
      return console.log('失败', err)
    }
    this.isCountDown = true
    console.log(1)
    try {
      const res = await sendSms(this.user.mobile)
      console.log(res)
    } catch (err) {
      if (err.request.status === 429) {
        console.log('发送太频繁了')
      }
    }
  }
}
</script>

<style lang="scss">
.iconfont {
  font-size: 37px;
}
.btnyz {
  background-color: #ededed;
  width: 152px;
  height: 46px;
  font-size: 22px;
}
.btnyzz {
  background-color: red;
}
</style>
