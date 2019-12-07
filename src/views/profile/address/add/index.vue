<template>
  <div class="add_address">
    <div id="l-map"></div>
    <div id="allmap"></div>
  	<div id="r-result"></div>
    <div class="add_address_header">

        <span @click="goBack" class="goback" />
        添加地址
    </div>
    <van-address-edit
    ref="addressEdit"
    :address-info="addressInfo"
    :area-list="areaList"
    show-set-default
    show-search-result
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @focus="inputFocus"
    @save="onSave"
    @change-area="onChangearea"
    @change-detail="onChangeDetail"
    >
    <div slot="default">
      <van-field
        type="text"
        label="门牌号"
        v-model="houseNumber"
        right-icon="edit"
        placeholder="10号楼5层501室222"
      />
    </div>
    </van-address-edit>
  </div>
</template>

<script>
import areaList from '../../../../assets/js/area.js';
import { bus } from '../../../../main'
import store from '../store/index'
export default {
  data() {
    return {
      areaList,
      addressInfo: {
          // id: '1',
          // name: '张三',
          // tel: '13000000000',
          // province:'山西省',
          // city:"大同市",
          // county:"新荣区",
          // areaCode: "140212",
          // addressDetail: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      },
      city: null,
      area: null,
      province: null,
      addressPoint: null, // 用于存放用户选择位置的经纬度
      houseNumber: null, // 门牌号,
      isChange: false,
    }
  },
  methods: {
    setNavVisiable:function() {
      bus.$emit('visiable',false);
    },
    onSave(content) {
     const userId = JSON.parse(localStorage.getItem('userInfo')).userInfo.userId;
     const areaCode = content.areaCode;
     const detailAddress = content.addressDetail;
     const username = content.name;
     const city = content.city;
     const area = content.county;
     const phone = content.tel;
     const province = content.province;
     const defaultAddress = content.isDefault ? 1 : 0;
     const houseNumber = this.houseNumber;
     const postInfo = {
       userId,
       detailAddress,
       username,
       city,
       area,
       phone,
       province,
       defaultAddress,
       areaCode,
       houseNumber,
     }
     const addressId  = store.getters.getAddressId; // 判断是新增还是修改地址
     let url = '';
     if(!addressId) {
       url = '/save_address';
     } else {
       url = '/update_address';
       postInfo.id = addressId;
     }
      this.$axios({
          method: 'post',
          url,
          data: postInfo,
        }).then(res=>{
          store.dispatch('clearAddressFun');
          this.$router.push({
            name: 'address',
          });
        })
    },
    goBack(){
       this.$router.push({
        name: 'address',
      });
    },
    onChangeDetail(val) {
      if(!this.city && !this.area) {
         this.$toast('请先选择地区');
         this.$refs.addressEdit.setAddressDetail('');
      }
    },
    onChangearea(values){
     this.city = values[1].name;
     this.area = values[2].name;
     const info = {
        city: this.city,
        area: this.area,
     }
     this.getLant(info);
     this.$refs.addressEdit.setAddressDetail('');
    },
    inputFocus(key){
     if(key === 'addressDetail') {
       if(!this.area && !this.city) {
          this.$toast('请先选择地区');
       } else {
         const data = this.$refs.addressEdit.data;
         data.houseNumber = this.houseNumber;
         const value = {
            areaCode: '',
            name: '',
            tel: '',
            province: '',
            city: '',
            county: '',
            addressName: '',
            addressDetail: '',
            houseNumber: '',
         };
          for( let key in value) {
                value[key] = data[key];
          }
         store.dispatch('setAddressFun', value);
         this.$router.push({
         name: 'search',
         query: { 
          ...this.addressPoint,
          }
       })
       }
     }
    },
        // 根据地名获得经纬度
    getLant(info){
        var myGeo = new BMap.Geocoder();
        const _this = this;
        myGeo.getPoint(info.area, function(point){
          if (point) {
            _this.addressPoint = point;
          }else{
            console.log("您选择地址没有解析到结果!");
          }
        }, info.city);
    },
    getChangeAddress(id){
      const userId = JSON.parse(localStorage.getItem('userInfo')).userInfo.userId;
      this.$axios({
        method: 'get',
        url: `/get_change_address?id=${id}&userId=${userId}`,
      }).then(res=>{
           // id: '1',
          // name: '张三',
          // tel: '13000000000',
          // province:'山西省',
          // city:"大同市",
          // county:"新荣区",
          // areaCode: "140212",
          // addressDetail: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        const addressInfo = {
          name: res.data.username,
          id: res.data.id,
          tel: res.data.phone,
          province: res.data.province,
          city: res.data.city,
          county: res.data.area,
          areaCode: res.data.areaCode,
          addressDetail: res.data.detailAddress,
        }
        this.addressInfo = addressInfo;
        this.houseNumber = res.data.houseNumber;
        this.city = res.data.city;
        this.area = res.data.area;
        const info = {
          city: this.city,
          area: this.area,
       }
       this.getLant(info);
      })
    }
  },
  created(){
    const addressId = this.$router.history.current.query.addressId;
    if(addressId) {
      this.isChange = true;
      store.dispatch('setAddressIdFun',addressId);
      this.getChangeAddress(addressId);
    } else {
        store.dispatch('setAddressIdFun',addressId);
    }
    this.setNavVisiable();
  },
  mounted(){
    if(!this.isChange) {
      const addressInfo = store.getters.getAddressInfo;
      addressInfo.addressDetail = `${addressInfo.addressName}${addressInfo.addressDetail}`;
      this.addressInfo = addressInfo;
      this.city = addressInfo.city;
      this.area = addressInfo.area;
      this.houseNumber = addressInfo.houseNumber;
      const info = {
          city: addressInfo.city,
          area: addressInfo.area,
      }
      this.getLant(info);
    }
  },

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

