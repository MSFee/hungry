<template>
  <div class="search">
    <div id="l-map"></div>
    <div id="allmap"></div>
  	<div id="r-result"></div>
      <div class="search_header">
            <span class="goBack" @click="goBack" />
            搜索地址
      </div>
      <div class="search_content">
          <div class="search_content_input">
            <van-cell-group>
              <van-field
                v-model="searchContent"
                @input="search"
                center
                border
                clearable
                placeholder="请输入小区/写字楼/学校等"
              >
                <van-button slot="button" size="small" type="primary">搜索</van-button>
              </van-field>
            </van-cell-group>
          </div>
          <div class="search_content_result">
              <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                error-text="请尝试只输入小区，写字楼或者学校名"
                finished-text="试一试输入其他内容吧"
              >
                <div @click="confirm(item)" class="search_content_result_list" v-for="item in list" :key="item.key" slot="default">
                    <div>{{ item.name }}</div>
                     <div>{{ item.address }}</div>
                </div>
              </van-list>
          </div>
      </div>
  </div>
</template>

<script>
import { bus } from '../../../../main';
import store from '../store/index.js';
export default {
    data(){
        return {
            area: [],
            list: [],
            addressPoint: {},
            searchContent: null,
            error: false,
            loading: false,
            finished: false
        }
    },
    methods: {
     setNavVisiable:function() {
        bus.$emit('visiable',false);
    },
    goBack(){
        this.$router.back(-1);
    },
    getAddressList(searchValue){
      const addressPoint = this.$router.history.current.query;
      var map = new BMap.Map("l-map");        
      map.centerAndZoom(new BMap.Point(addressPoint.lng,addressPoint.lat ), 11);
      const _this = this;
      var options = {
        onSearchComplete: function(results){
          // 判断状态是否正确
          if (local.getStatus() == BMAP_STATUS_SUCCESS){
            var area = [];
            for (var i = 0; i < results.getCurrentNumPois(); i ++){
              const oneAddressInfo = {
                key: i,
                name: results.getPoi(i).title,
                address: results.getPoi(i).address,
              }
              area.push(oneAddressInfo);
            }
           _this.list = area;
           _this.finished = true;
           _this.loading = false;
           if(!area.length) {
             _this.error = true;
           }
          }
        }
      };
      var local = new BMap.LocalSearch(map, options);
      local.search(searchValue);
    },
    search(value) {
      this.getAddressList(value);
    },
    confirm(item){
      const addressInfo = store.getters.getAddressInfo;
      const addressDetail = item.address;
      const addressName = item.name;
      addressInfo.addressName = addressName;
      addressInfo.addressDetail = addressDetail;
      store.dispatch('setAddressFun', addressInfo);
      this.$router.push({
        name: 'add',
      });
    },
  },
  created(){
     
    this.setNavVisiable();
  },
  mounted(){
      this.getAddressList('学校');
  }
}
</script>

<style lang="less">
.search {
    width: 100%;
    &_header {
        width: 100%;
        height: 45px;
        background: rgb(0,140,255);
        position: relative;
        line-height: 45px;
        text-align: center;
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    .goBack{
        display: inline-block;
        position: absolute;
        left: 10px;
        top: 15px;
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        transform: rotate(-45deg);
    }
    &_content {
      padding-left: 10px;
      padding-right: 10px;
      &_input {
        margin-top: 10px;
        height: 50px;
      }
      &_result {
          height:calc(~"100vh - 110px");
          overflow: auto;
          &_list {
            height: 60px;
            box-sizing: border-box;
            padding-top: 8px;
            border-bottom: 1px solid #ddd;
            div:last-child {
              font-size: 15px;
              color: #999;
            }
          }
      }
    }
}
</style>