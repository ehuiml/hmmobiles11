<template>
  <div id="layoutindex">
    <router-view></router-view>
    <van-tabbar v-model="active" router>
      <van-tabbar-item to="/">
        <i slot="icon" class="iconfont iconshouye"> </i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont iconshouye"> </i>
        <span>我的</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont iconshipin"> </i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/vadio">
        <i slot="icon" class="iconfont iconshouye"> </i>
        <span>视频</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
.van-tabbar-item {
  i {
    font-size: 34px;
  }
}
</style>
