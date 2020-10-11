<template>
  <div class="my-container">
    <div class="header user-info" v-if="user">
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" :src="userInfo.photo" round fit="cover" />
          <span class="name">黑马头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>

      <!-- 个人中心关注、粉丝等区域 -->
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{ userInfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div class="header NotLogin" v-else>
      <div class="loginButton" @click="$router.push('/login')">
        <img src="~@/assets/mobile.png" alt="" class="mobile-img" />
        <span class="text">登陆/注册</span>
      </div>
    </div>
    <van-grid class="grid-nav mb-9" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont iconzuopin"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icondianzan"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link />
    <van-cell class="mb-9" title="小智同学" is-link />
    <van-cell class="logout-cell" clickable title="退出登录" v-if="user" @click="$router.push('/login')" />
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      userInfo: ''
    }
  },
  created() {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  name: 'MyPage',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async loadUserInfo() {
      console.log(1)

      try {
        const { data: res } = await getUserInfo()
        console.log(res)
        this.userInfo = res.data
      } catch (err) {
        console.log('获取失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logout-cell {
  text-align: center;
  color: #d86262;
}

.mb-9 {
  margin-bottom: 9px;
}
.grid-nav {
  .grid-item {
    height: 141px;
    i.iconfont {
      font-size: 45px;
    }
    .iconzuopin {
      color: #eb5253;
    }
    .icondianzan {
      color: #ff9d1d;
    }
    span.text {
      font-size: 28px;
    }
  }
}
.header {
  height: 361px;
  background-image: url('~@/assets/banner.png');
  background-size: cover;
}
.NotLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  .loginButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mobile-img {
    width: 132px;
    height: 132px;
    margin-bottom: 15px;
  }
  .text {
    font-size: 28px;
    color: #fff;
  }
}
.user-info {
  .base-info {
    height: 231px;
    padding: 76px 32px 23px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 132px;
        height: 132px;
        border: 4px solid #fff;
        margin-right: 23px;
      }
      .name {
        font-size: 30px;
        color: #fff;
      }
    }
  }
  .data-stats {
    display: flex;
    .data-item {
      height: 130px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .count {
        font-size: 36px;
      }
      .text {
        font-size: 23px;
      }
    }
  }
}
</style>
