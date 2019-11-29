<template>
  <div class="info">
      <div class="info_header">
        <div class="info_header_img">
          <span class="left">头像</span>
          <div class="right">
              <span>
              <van-image
                round
                width="100%"
                height="100%"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </span>
            <span id="info_arrow"/>
          </div>
        </div>
        <div class="info_header_username">
          <span class="left">用户名</span>
          <span class="right theme_color">
            38ba8eb97
            <span id="info_arrow"/>
          </span>
        </div>
      </div>
      <div class="info_count">
          <div class="info_count_desc theme_color left">
              账号绑定
          </div>
          <div class="info_count_tel">
              <div class="left"> <van-icon color="rgb(0,151,255)" name="phone-o" />手机</div>
              <span class="right">
                1522****5271 
                <span id="info_arrow"></span>
              </span>
          </div>
      </div>
      <div class="info_count">
          <div class="info_count_desc theme_color left">
              安全设置
          </div>
          <div class="info_count_tel">
              <div class="left" :style="{'font-weight':'500'}"> 登录密码</div>
              <span class="right theme_color2">
                未设置
                <span id="info_arrow"></span>
              </span>
          </div>
      </div>
      <div class="info_out">
          退出登录
      </div>
  </div>
</template>

<script>
import { bus } from '../../../main';
export default {
  methods:{
        setNavVisiable:function() {
        bus.$emit('visiable',false);
      },
  },
  created(){
     this.setNavVisiable();
  }
}
</script>

<style lang="less">
#info_arrow {
  width: 7px;
  height: 7px;
  display: inline-block;
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  transform: rotate(45deg);
  margin-bottom: 2px;
}
.theme_color {
  color: #666;
}
.theme_color2 {
  color:rgb(0,151,255);
}
.right {
  margin-right: 20px;
}
.left {
  margin-left: 20px;
}
.info {
  width: 100%;
  height: 100vh;
  background: rgb(245,245,245);
  overflow: auto;
  &_header {
    height: 130px;
    background: white;
    margin-bottom: 20px;
    &_img {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      span {
        display: inline-block;
      }
      span:first-child {
        font-size: 18px;
        font-weight: 700;
      }
      div {
        width: 70px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          width: 50px;
          height: 50px;
        }
      }
    }
    &_username {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      span:first-child {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  &_count {
    width: 100%;
    margin-bottom: 20px;
    &_desc {
      margin-bottom: 10px;
      font-size: 12px;
    }
    &_tel {
      height: 50px;
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:first-child {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  &_out {
    width: 100%;
    background: white;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 17px;
    color:red;
    font-weight: 700;
  }
}
</style>