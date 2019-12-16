<template>
  <div class="order">
    <div v-for="(item,index) in arr" :key="index" class="order_list">
      <div class="order_list_header">
        <div class="order_list_header_pic">
          <van-image round width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="order_list_header_shop">
          炸舌泡椒牛肉米线(...
          <span class="toDetail" />
          <div>2019-11-21 21:21</div>
        </div>
        <div class="order_list_header_status">订单超时未支付</div>
      </div>
      <div class="order_list_center">
        火山飞石·牦牛肉米线（红...）
        <span>￥19.90</span>
      </div>
      <div class="order_list_footer">
        <div class="order_list_footer_btn">
          <van-button size="small" plain hairline type="info">再来一单</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    setNavVisiable: function() {
      bus.$emit("visiable", true);
    }
  },
  created() {
    this.setNavVisiable();
  }
};
</script>

<style lang="less">
@font-color: #333;
.toDetail {
  width: 5px;
  height: 5px;
  margin-left: 10px;
  display: inline-block;
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  transform: rotate(45deg);
}
.order {
  width: 100%;
  background: rgb(2545, 245, 245);
  height: calc(~"100vh - 60px");
  overflow: auto;
  &_list {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
    &_header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      &_pic {
        width: 40px;
        height: 40px;
      }
      &_shop {
        margin-left: 10px;
        color: @font-color;
        div {
          font-size: 10px;
          color: @font-color * 3;
        }
      }
      &_status {
        position: absolute;
        font-size: 13px;
        color: @font-color;
        right: 10px;
      }
    }
    &_center {
      color: @font-color * 2;
      height: 48px;
      display: flex;
      align-items: center;
      padding-left: 50px;
      font-size: 15px;
      border-bottom: 1px solid #eee;

      span {
        color: @font-color;
        font-weight: 700;
        position: absolute;
        right: 10px;
      }
    }
    &_footer {
      height: 48px;
      display: flex;
      align-items: center;
      &_btn {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>