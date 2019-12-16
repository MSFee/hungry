<template>
  <div class="msite">
    <div class="msite_header">
        <div class="msite_location">
          <van-icon name="location"/>
          <div v-if="loadingLocation">正在识别地址...</div>
          <div v-else> {{initLocation}}<van-icon class="msite_location_arrow" name="arrow-down" /> </div>
        </div>
        <van-sticky>
          <div class="msite_search">
            <div class="msite_search_content">
                 <van-cell-group>
                  <van-field input-align="center" v-model="value" placeholder="搜索饿了么商家、商品名称" />
               </van-cell-group> 
              </div>
          </div>
        </van-sticky>
    </div>
  <div v-if="successLoadingLocation">
    <div class="msite_allogo">
      <van-tabs  swipeable animated line-width="10px" color="#ccc">
          <van-tab > 
            <div class="msite_logo">
              <div class="msite_logo_pic" v-for="(item,id) in logoImgTab1" :key="id">
                <van-image
                  class="msite_logo_img"
                  :src="item.imgUrl"
                />
                <div>{{item.imgDesc}}</div>
              </div>
            </div>
          </van-tab>
          <van-tab > 
            <div class="msite_logo">
              <div class="msite_logo_pic" v-for="(item,id) in logoImgTab2" :key="id">
                <van-image
                  class="msite_logo_img"
                  :src="item.imgUrl"
                />
                <div>{{item.imgDesc}}</div>
              </div>
            </div>
            </van-tab>
        </van-tabs>
    </div>
    <div class="msite_banner">
        <div class="msite_banner_desc">
          <div>品质套餐</div>
          <div>搭配齐全吃的好</div>
          <div>立即抢购></div>
        </div>
       <van-image
          width="40%"
          height="50%"
          src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
        />
    </div>
    <div class="msite_members">
        <div class="msite_logomem">
            <van-image src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34">
            
            </van-image>
          <span>
            超级会员
          </span>
          <span class="msite_envelope">每月领20元红包</span>
        </div>
        <div>
          立即开通>
    </div>
  </div>
   <div class="msite_businessman">
        推荐商家
   </div>
    <ListofGoods></ListofGoods>
   <router-view/>
  </div>
  <div class="msite_noLocation" v-else>
      <img src="http://fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif" />
      <div :style="{'color':'#666'}">输入地址后才能订餐哦!</div>
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100%', width:'100%' }"
      />
      <div @click="showPopup">手动选择地址</div>
  </div>
    <baidu-map :center="center" :zoom="zoom" @ready="handler">
  </baidu-map>
  </div>
</template>
<script>
import ListofGoods from '@/components/ListofGoods.vue';
export default {
    components: {
    ListofGoods
  },
  data(){
    return {
      center:{lng: 0,lat:0},
      zoom:3,
      show: false,
      successLoadingLocation: true, // 加载地址是否成功
      loadingLocation: true,
      initLocation: undefined,
      logoImg: [],
      logoImgTab1: [],
      logoImgTab2: [],
      value:'',
    }
  },
  methods:{
      handler ({BMap, map}) {
        const _this = this;
        var geolocation = new BMap.Geolocation();
			  	geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
            map.panTo(r.point);
            const address = r.address;
            if(address.district === '') {
              _this.initLocation = '未能获取地址' ;
               _this.successLoadingLocation = true;
            } else {
              _this.initLocation = `${address.city}${address.district}${address.street}${address.street_number}`;
              _this.successLoadingLocation = true;
            }
              _this.loadingLocation = false;
					}
					else {
						_this.initLocation = '未能获取地址';
					}
				},{enableHighAccuracy: true})
      },
      getImg:function(){
        this.$axios({
              methods: 'get',
              url: '/logo_img'
          }).then(res => {
            this.logoImg  = res.list;
            this.logoImgTab1 = res.list.slice(0,10);
            this.logoImgTab2 = res.list.slice(10);
          })
      },
      showPopup(){
        this.show = true;
      }
  },
  created(){
    this.getImg();
  },
}
</script>
<style lang="less">
.msite {
  width: 100%;
  height:calc(~"100% - 60px");
  overflow-y: auto;
  &_noLocation {
     width: 60%;
     margin: 0 auto;
     display: flex;
     height: 300px;
     align-items: center;
     flex-direction: column;
     img {
       width: 200px;
       height: 200px;
     }
     div:last-child {
       background: rgb(86,209,118);
       margin-top: 10px;
       line-height: 60px;
       text-align: center;
       font-size: 28px;
       color: white;
       height: 60px;
       width: 200px;
     }
  }
  .msite_header {
   background: rgb(0,137,255);
   height: 100px;
   overflow: hidden;
   box-sizing: border-box;
  .msite_search {
    padding: 7px 14px;
    background: rgb(0,137,255);
    .van-field {
      height: 50px;
    }
  }
  .msite_location{
    display: flex;
    margin-top: 10px;
    // margin-top: 9px;
    font-size: 18px;
    font-weight: 700;
    align-items: baseline;
    padding-left: 14px;
    color: white;
    &_arrow {
      margin-left: 5px;
      font-size: 10px;
    }
  }

  }
  .msite_allogo {
    height: 180px;
    .van-tabs {
      .van-tabs__wrap {
        height: 10px;
      }
    }
  }
  .msite_logo {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    .msite_logo_pic {
      text-align: center;
      font-size: 13px;
      color: #666;
      width: 20%;
      .msite_logo_img {
        width:50px;
        height: 50px;
      }
    }
  }
  .msite_banner {
    width: 96%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
    background: rgb(246,246,246);
    .msite_banner_desc {
      div:first-child {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 5px;
      }
      div:nth-child(2) {
        font-size: 16px;
        color:#777;
        margin-bottom: 5px;
      }
      div:last-child {
        font-size: 18px;
        font-weight: 700;
        color:#af8260;
      }
    }
  }
  .msite_logomem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .msite_members {
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    padding: 10px;
    height: 25px;
    color:#644f1b;
    margin: 10px;
    background: rgb(247,229,175);
    div:first-child {
     .msite_envelope {
       display: inline-block;
       font-size: 10px;
      }
      .msite_envelope:before {
        content: "\B7";
        font-size: 20px;
        font-weight: 700;
      }
    }
    div:last-child {
      font-size: 10px;
    }
  }
  .msite_businessman {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .msite_businessman:before {
     display: block;
     content: "";
     width: 18px;
     margin-right: 15px;
     height: 1px;
      background-color: #999;
    }
    .msite_businessman:after {
     display: block;
     content: "";
     margin-left: 15px;
     width: 18px;
     height: 1px;
      background-color: #999;
    }
}

</style>