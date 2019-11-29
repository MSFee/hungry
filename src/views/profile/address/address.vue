<template>
  <div class="address">
      <div class="address_content">
        <div class="address_content_header">
            <span @click="goBack" class="address_goBack"/>
            我的地址
        </div>
        <div class="address_body">
          <div v-for="item in ret" :key="item" class="address_content_main">
            <div class="address_content_main_desc">
                <div>
                  <span class="name">长得帅</span>
                  <span class="sex">先生</span>
                  <span class="tel">17855689902</span>
                </div>
                <div class="addressAetail">             
                   华新文登考研(大学路)四川省成都市新都区大学路与正因北街西五巷交叉口南50米22
                </div>
            </div>
            <div class="address_content_main_option">
                <span><van-icon name="edit" /></span>
                <span><van-icon name="cross" /></span>
            </div>
         </div>
        </div>
      </div>
      <div @click="addNewAddress" class="address_addnew"> <van-icon name="add-o" />新增收货地址</div>
  </div>
</template>

<script>
import { bus } from '../../../main';
export default {
  data() {
    return {
      ret : [1,2,3,4,5,6,7],
    }
  },
  methods: {
    setNavVisiable:function() {
      bus.$emit('visiable',false);
    },
    goBack(){
      this.$router.back(-1);
    },
    addNewAddress(){
        this.$router.push({
            name: 'add',
        })
    }
  },
  created(){
    this.setNavVisiable();
  }
}
</script>

<style lang="less">
.address {
  width: 100%;
  &_body {
  height:calc(~"100vh - 110px");
  overflow: auto;
  }
  &_goBack {
    width: 9px;
    height: 9px;
    display:inline-block; 
    border-top: 1.7px solid white;
    border-left: 1.7px solid white;
    transform: rotate(-45deg);
    position: absolute;
    top:20px;
    left:20px;
  }
  &_content {
    height:calc(~"100vh - 60px");
    &_header {
      width: 100%;
      height: 50px;
      font-size: 18px;
      font-weight: 700;
      position: relative;
      line-height: 50px;
      text-align: center;
      color: white;
      background: rgb(0,141,255);
    }
    &_main {
      display: flex;
      border-bottom: 1px solid #ccc;
      &_desc {
        width: 80%;
        box-sizing: border-box;
        padding: 10px;
        div:first-child {
          span {
            color:#666;
            margin-right: 10px;
          }
          span:first-child {
            font-size: 16px;
            font-weight: 700;
            color: #333;
          }
        }
        .addressAetail {
          font-size: 12px;
          color:#666;
        }
      }
      &_option {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#666;
        span {
          margin-right: 20px;
        }
      }
    }
  }
  &_addnew {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-top: 1px solid #ccc;
    color: #3190e8;
    bottom: 0;
    
  }
}
</style>