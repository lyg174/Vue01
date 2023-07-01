<template>
  <div id="app">
    <!-- 路由的 页面渲染区域 -->
    <router-view></router-view>

    <div class="tabbar fixed w-full bottom-0">
      <ul class="flex justify-around bg-light-50">
        <li :class="tabIndex==0?'text-red-800':''" @click="changeTab(0)">
          <img src="../dianying.png" alt="">
          <span>电影</span>
        </li>
        <li :class="tabIndex==1?'text-red-800':''" @click="changeTab(1)">
          <img src="../yingyuan.png" alt="">
          <span>影院</span>
        </li>
        <li :class="tabIndex==2?'text-red-800':''" @click="changeTab(2)">
          <img src="../zixun.png" alt="">
          <span>咨询</span>
        </li>
        <li :class="tabIndex==3?'text-red-800':''" @click="changeTab(3)">
          <img src="../wode.png" alt="">
          <span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  img {
    width: 21px;
    margin: 0 1.5px;
  }
  span {
    font-size: 12px;
  }
</style>

<script>

export default {
  name: 'App',
  data() {
    return {
      tabIndex:0
    }
  },
  methods:{
    changeTab(num){
      this.tabIndex = num
      var path = ''
      // 切换路由
      if(num==0){
        path='/'
      }else if(num == 1){
        path='/cinemas'
      }
      this.$router.push(path)// 路由跳转
    }
  }
}
</script>
