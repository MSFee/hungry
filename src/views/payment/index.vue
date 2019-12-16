<template>
  <div class="payment">
    <header>在线支付</header>
    <div class="restTime">
      <div class="desc">支付剩余时间</div>
      <div v-if="minutes >= 0">
        <div class="time" v-if="minutes >= 10">00:{{ minutes }}:{{ second }}</div>
        <div class="time" v-else>00:0{{ minutes }}:{{ second }}</div>
      </div>
      <div class="time" v-else>订单已超时</div>
    </div>
    <div class="shopInfo">
      <div>
        <p>汤小鲜与范小满外卖订单</p>
        <span>详情</span>
      </div>
      <span class="red">￥15.88</span>
    </div>
    <div class="pay">
      <div class="desc">其他支付</div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell icon="alipay" title="支付宝" clickable @click="radio = '1'">
            <van-radio checked-color="#07c160" slot="right-icon" name="1"></van-radio>
          </van-cell>
          <van-cell icon="wechat" title="微信支付" clickable @click="radio = '2'">
            <van-radio checked-color="#07c160" slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="btn">
      <van-button @click="succPost" :disabled="minutes < 0" class="color2">确认支付</van-button>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
export default {
  data() {
    return {
      radio: "1",
      second: "00",
      minutes: 15
    };
  },
  methods: {
    setNavVisiable: function() {
      bus.$emit("visiable", false);
    },
    reduceSecond() {
      let secondInterval = null;
      secondInterval = setInterval(() => {
        if (this.minutes === 0 && this.second === "00") {
          clearInterval(secondInterval);
        }
        if (Number(this.second) === 0) {
          this.minutes--;
          this.second = "60";
        }
        let tem = Number(this.second) - 1;
        if (tem < 10) {
          this.second = `0${tem}`;
        } else {
          this.second = `${tem}`;
        }
      }, 1000);
    },
    succPost() {
     new Promise((resolve)=>{
        const successToast = this.$toast.loading({
            duration: 0, // 持续展示 toast
            icon: "checked",
            message: "支付成功"
          });
          let count = 1;
          const successTimer = setInterval(() => {
            count++;
            if (count === 3) {
              successToast.clear();
              clearInterval(successTimer);
              resolve();
            }
          }, 1000);
      }).then(()=>{
        const toast = this.$toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: "正在核对订单"
          });
          let second = 3;
          const timer = setInterval(() => {
            second--;
            if (!second) {
              // 手动清除 Toast
              this.$toast.clear();
              clearInterval(timer);
              this.$router.push({
                path: '/order',
              })
            }
      }, 1000);
      })
  
    }
  },
  created() {
    this.reduceSecond();
    this.setNavVisiable();
  }
};
</script>

<style lang="less">
.red {
  color: red;
}
.color2 {
  background: rgb(7, 193, 96);
}
.payment {
  width: 100%;
  background: rgb(245, 245, 245);
  header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: rgb(49, 144, 232);
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  .restTime {
    height: 80px;
    padding-left: 10px;
    padding-right: 10px;
    background: white;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    .desc {
      padding-top: 30px;
      color: #999;
      font-size: 13px;
      text-align: center;
    }
    .time {
      font-size: 28px;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .shopInfo {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 13px;
    div {
      display: flex;
      span {
        margin-left: 20px;
        color: #999;
      }
    }
  }
  .pay {
    height: 100px;
    .desc {
      font-size: 13px;
      color: #999;
      background: rgb(245, 245, 245);
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    height: 200px;
    flex-wrap: wrap;
    .van-button--normal {
      width: 90%;
      border-radius: 5px;
      line-height: 40px;
      height: 40px;
      margin: 40px auto;
      color: white;
    }
  }
}
</style>