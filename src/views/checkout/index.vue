<template>
  <div class="checkout">
    <header>
      <span @click="goback" />
      确认订单
    </header>
    <div class="content">
      <div class="orderInfo">
        <div class="shipped">订单配送至</div>
        <div class="address_detail">
          <p>半岛酒店(新都店)正因北街西六街道</p>
          <span class="toAddress" />
        </div>
        <div class="nameAtel">张三 111223131</div>
      </div>
      <div class="orderdetail">
        <div class="time">
          <p>送达时间</p>
          <p>尽快送达(16:52送达)</p>
        </div>
        <div class="way">
          <p>支付方式</p>
          <p>在线支付</p>
        </div>
      </div>
      <div class="orderContent">
        <div class="shop_name">朴园</div>
        <ul class="food_list">
          <li v-for="(item,index) in arr" :key="index">
            <div>
              <img
                src="https://cube.elemecdn.com/1/aa/0b90f897db729c2901d744e0536e2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_72,h_72,m_fixed"
              />
              <p>意大利嫩煎黑椒牛肉+秘制杏鲍菇双拼</p>
              <span>x1</span>
            </div>
            <span>￥29.88</span>
          </li>
        </ul>
        <ul class="food_list">
          <li>
            <p>餐盒费</p>
            <p>￥6</p>
          </li>
          <li>
            <p>配送费</p>
            <p>￥0</p>
          </li>
          <li>
            <p>首次关顾立减</p>
            <p class="red">-￥1</p>
          </li>
          <li>折扣商品不与满减津贴等优惠同享</li>
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <li>
            <p>小计</p>
            <p>
              ￥
              <span class="big_fontsize">100</span>
            </p>
          </li>
        </ul>
        <ul class="food_list margintop list_bottom">
          <li>
            <p>餐具份数</p>
            <span>未选择</span>
          </li>
          <li>
            <p>订单备注</p>
            <span>口味、偏好</span>
          </li>
          <li>
            <p>发票信息</p>
            <span>不支持开发票</span>
          </li>
          <li>
            <p>号码保护</p>
            <span>号码保护中</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="orderBotton">
      <div class="much">
        <p>￥15.88</p>
        <p>| 已优惠￥16</p>
      </div>
      <div @click="toPayment" class="toPay">去支付</div>
    </div>
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :show-exchange-bar="false"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import { bus } from "../../main";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1569104000,
  endAt: 1584592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      arr: [1, 2, 3],
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    };
  },
  methods: {
    setNavVisiable: function() {
      bus.$emit("visiable", false);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    goback() {
      this.$router.back(-1);
    },
    toPayment(){
        this.$router.push({
            name: 'payment',
        })
    }
  },
  created() {
    this.setNavVisiable();
  }
};
</script>

<style lang="less">
.red {
  color: red;
}
.big_fontsize {
  font-size: 30px;
}
.margintop {
  margin-top: 20px !important;
}
.checkout {
  width: 100%;
  overflow: hidden;
  header {
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: white;
    font-weight: 700;
    font-size: 18px;
    position: fixed;
    background: rgb(0, 161, 255);
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(-45deg);
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .content {
    width: 100%;
    margin-top: 45px;
    background: linear-gradient(rgb(0, 161, 255), rgb(245, 245, 245));
    height: calc(100vh - 45px);
    overflow: auto;
    .orderInfo {
      width: 90%;
      margin: 0 auto;
      height: 100px;
      color: white;
      > div {
        margin-bottom: 6px;
      }
      .shipped {
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.8);
      }
      .address_detail {
        width: 100%;
        font-weight: 700;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .toAddress {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-right: 2px solid white;
          border-top: 2px solid white;
          transform: rotate(45deg);
        }
      }
      .nameAtel {
        font-size: 15px;
      }
    }
    .orderdetail {
      width: 95%;
      background: white;
      height: 100px;
      margin: auto;
      div {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        p:first-of-type {
          color: #333;
        }
        p:last-of-type {
          color: #2395ff;
        }
      }
    }
    .orderContent {
      width: 90%;
      padding-left: 20px;
      background: white;
      margin: 10px auto;
      .shop_name {
        font-size: 18px;
        height: 50px;
        font-weight: 700;
        line-height: 50px;
        border-bottom: 1px dotted #eee;
      }
      .food_list {
        margin-top: 10px;
        width: 90%;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px dotted #eee;
          div {
            width: 80%;
            font-size: 13px;
            display: flex;
            align-items: center;
            p {
              margin-left: 10px;
              width: 60%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          img {
            width: 35px;
            height: 35px;
          }
        }
      }
      .list_bottom {
        span {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
  .orderBotton {
    position: fixed;
    display: flex;
    background: rgb(60, 60, 60);
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    .much {
      display: flex;
      margin-left: 10px;
      p {
        height: 100%;
        line-height: 50px;
      }
      p:first-of-type {
        color: white;
        font-size: 20px;
        margin-right: 5px;
      }
      p:last-of-type {
        color: #999;
        font-size: 13px;
        height: 100%;
      }
    }
    .toPay {
      height: 100%;
      background: rgb(0, 243, 103);
      line-height: 50px;
      padding-left: 20px;
      font-weight: 700;
      padding-right: 20px;
      font-size: 20px;
      color: white;
    }
  }
}
</style>