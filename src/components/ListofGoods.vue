<template>
  <div class="main_list">
    <van-sticky :offset-top="offsetTop">
      <div ref="filter" @click="getTop" class="main_filter">
        <van-dropdown-menu class="main_filter_menu">
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
        <van-dropdown-menu class="main_filter_menu">
          <div role="button" class="van-dropdown-menu__item">
            <span @click="getClosest">距离最近</span>
          </div>
        </van-dropdown-menu>
        <van-dropdown-menu class="main_filter_menu">
          <div role="button" @click="getQuality" class="van-dropdown-menu__item">品质联盟</div>
        </van-dropdown-menu>
        <van-dropdown-menu class="main_filter_menu">
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="首单立减" />
            <van-switch-cell v-model="switch2" title="品牌商家" />
            <div class="main_confirm_button">
              <van-button block type="default" @click="onConfirm">取消</van-button>
              <van-button block type="info" @click="onConfirm">确认</van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </van-sticky>
    <div class="main_list_shop">
      <div @click="toShop" v-for="(item,index) in storeList" :key="index">
        <van-card :desc="item.desc" :title="item.title" :thumb="item.thumb">
          <div slot="tags">
            <van-tag plain type="danger" v-if="item.tag1">{{ item.tag1 }}</van-tag>
            <van-tag plain type="danger" v-if="item.tag2">{{ item.tag2 }}</van-tag>
          </div>
          <div slot="footer">
            <span size="mini">{{ item.distance }}</span>
            <span class="main_list_shop_segmentation" size="mini">|</span>
            <span size="mini">{{ item.time }}分钟</span>
          </div>
          <div slot="price">
            <span :style="{color:'black'}">月售{{item.num}}单</span>
          </div>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import axios from "axios";
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Provide() private value: number = 0;
  @Provide() private switch1: boolean = false;
  @Provide() private switch2: boolean = false;
  @Provide() private option: any[] = [
    { text: "综合排序", value: 0 },
    { text: "好评优先", value: 1 },
    { text: "销量最高", value: 2 },
    { text: "起送价最低", value: 3 },
    { text: "配送最快", value: 4 },
    { text: "配送费最低", value: 5 },
    { text: "人均从低到高", value: 6 },
    { text: "人均从高到低", value: 7 },
    { text: "通用排序", value: 8 }
  ];
  @Provide() private storeList: any[] = [];
  @Provide() private screenWidth: any = 0;
  @Provide() private offsetTop: Number = 90;
  private getStoreList(url = "/store_list"): void {
    this.$axios({
      methods: "get",
      url: url
    }).then(res => {
      const temArr = res.list;
      let desc = "";
      let distance = "";
      for (let i = 0; i < temArr.length; i++) {
        if (temArr[i].sendingfee === 0) {
          desc = `￥起送费 ${temArr[i].shippingFee} | 免配送费`;
        } else {
          desc = `￥起送费 ${temArr[i].shippingFee} | 配送费￥${temArr[i].sendingfee}`;
        }
        temArr[i].desc = desc;
        if (temArr[i].distance >= 1000) {
          temArr[i].distance = `${(temArr[i].distance / 1000).toFixed(3)}km`;
        } else {
          temArr[i].distance = `${temArr[i].distance}m`;
        }
      }
      this.storeList = temArr;
    });
  }
  private toShop(): void {
    this.$router.push({
      name: "shop"
    });
  }
  private onConfirm(): void {
    this.$refs.item.toggle();
  }
  private getTop(): void {
    this.$refs.filter.scrollIntoView();
  }
  private getClosest(): void {
    this.getStoreList("/store_list?filter=recently");
  }
  private getQuality(): void {
    this.getStoreList("/store_list?filter=quality");
  }
  private getClientWidth(): void {
    const screenWidth = document.body.clientWidth;
    this.getComputed(screenWidth);
  }
  private created(): void {
    this.getClientWidth();
    this.getStoreList();
  }
  private getComputed(screenWidth: any) {
    if (screenWidth >= 1000) {
      this.offsetTop = 90;
    }
    if (screenWidth < 1000 && screenWidth >= 500) {
      this.offsetTop = 85 + (screenWidth - 500) * 0.01;
    }
    if (screenWidth < 500 && screenWidth >= 400) {
      this.offsetTop = 67 + (screenWidth - 400) * 0.18;
    }
    if (screenWidth <= 400 && screenWidth >= 300) {
      this.offsetTop = 50 + (screenWidth - 300) * 0.17;
    }
  }
  private mounted(): void {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        const screenWidth = window.screenWidth;
        this.getComputed(screenWidth);
      })();
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main_list {
  // background: red;
  padding: 10px;
  .main_filter {
    display: flex;
    .main_filter_menu {
      height: 40px;
      width: 25%;
    }
  }
  .main_confirm_button {
    display: flex;
  }
  .main_list_shop {
    .main_list_shop_segmentation {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
</style>
