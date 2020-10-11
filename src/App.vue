<template>
  <div id="app">
    <!-- <h1>heim</h1>
    <div>
      <i class="iconfont iconfenxiang"></i>
    </div>
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.box {
  width: 375px;
  height: 200px;
  background-color: pink;
}
</style>
