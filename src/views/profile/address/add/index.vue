<template>
  <div class="add_address">
    <div id="l-map"></div>
    <div id="allmap"></div>
  	<div id="r-result"></div>
    <div class="add_address_header">
        <span class="goback" />
        添加地址
    </div>
    <van-address-edit
    :area-list="areaList"
    show-postal
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @change-area="onChangearea"
    @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from '../../../../assets/js/area.js';
import { bus } from '../../../../main'
export default {
  data() {
    return {
      areaList,
      searchResult: [],
n    }
  },
  methods: {
    setNavVisiable:function() {
      bus.$emit('visiable',false);
    },
    onSave() {
      Toast('save');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    onChangearea(values){
      console.log(values);
    },
    getAddressList(){
      var map = new BMap.Map("l-map");        
      map.centerAndZoom(new BMap.Point(104.065,30.679 ), 11);
      var options = {
        onSearchComplete: function(results){
          // 判断状态是否正确
          if (local.getStatus() == BMAP_STATUS_SUCCESS){
            var s = [];
            for (var i = 0; i < results.getCurrentNumPois(); i ++){
              s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
            }
           console.log(s);
          }
        }
      };
      var local = new BMap.LocalSearch(map, options);
      local.search("小区");
    },
    // 根据地名获得经纬度
    getLant(){
        var myGeo = new BMap.Geocoder();
       	myGeo.getPoint("新都区", function(point){
          if (point) {
          console.log(point);
          }else{
            alert("您选择地址没有解析到结果!");
          }
        }, "成都市");
    }
  },
  created(){
    this.setNavVisiable();
  },
  mounted(){
    this.getAddressList();
        this.getLant();

  }
}
</script>

<style lang="less">
.add_address {
  height: 100vh;
  background: rgb(245,245,245);
  &_header{
    height: 50px;
    background: rgb(0,140,255);
    line-height: 50px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    position: relative;
    text-align: center;
    .goback{
      display: inline-block;
      width: 10px;
      height:10px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(-45deg);
      position: absolute;
      top:20px;
      left:20px;
    }
  }
}
</style>

