<template>
    <div id="nav" >
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/msite" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="discover" icon="search">发现</van-tabbar-item>
        <van-tabbar-item replace to="order" icon="coupon-o">订单</van-tabbar-item>
        <van-tabbar-item replace to="profile" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
 data(){
    return {
      active: 0,
    }
  },
}
</script>

<style lang="less">
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  .van-tabbar {
    border-top: 1px solid #ccc;
    height:60px;
    .van-icon {
      font-size: 18px;
    }
    .van-tabbar-item__text {
      font-size: 16px;
    }
  }
}
</style>