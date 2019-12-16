<template>
  <div class="shop">
    <div class="shop_header">
      <span class="goback" />
      <div id="shop_img" :style="haveImgLogo ? imgStyle : noImgStyle" />
      <div class="shop_header_logo">
        <img
          src="https://cube.elemecdn.com/c/ec/ae226c2261f46110a39f908b6c434jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
        />
      </div>
    </div>
    <div class="shop_activity">
      <div class="shop_activity_shopName">
        朴园
        <i />
      </div>
      <div class="shop_activity_desc">
        <span>评价4.4</span>
        <span>月售1839单</span>
        <span>蜂鸟专送约30分钟</span>
      </div>
      <div class="shop_activity_coupons">
        <div>
          <span>
            <span>￥</span>6
          </span>
          <span>无门槛</span>
        </div>
        <div>领取</div>
      </div>
      <div class="shop_activity_tag">
        <div>
          <span>32减10</span>
          <span>50减15</span>
          <span>80减20</span>
          <span>150减30</span>
        </div>
        <div>
          5个优惠
          <i />
        </div>
      </div>
      <div class="shop_activity_announcement">
        公告：近期有新菜品哟!朴园恭候您的光临！
        1.本店推荐您使用【饿了么网上订餐】-[本店优先配送饿了么订单]
        2.外卖制作+配送都需要时间，为了能及时用餐，希望大家提前预定
        3.配送属平台资源，请勿差评，小店不易，赠店好评，心存美好
        祝各位friend天天开心，工作顺利，学业有成
      </div>
    </div>
    <div class="shop_main">
      <div class="shop_main_nav">
        <van-tabs sticky v-model="activeName">
          <van-tab title="点餐" name="a">
            <div class="shop_banner">
              <img
                src="https://cube.elemecdn.com/5/14/120714e82b4c035d5411f6b14de15png.png?x-oss-process=image/format,webp/resize,w_686"
              />
            </div>
            <div class="shop_rate">
              <span>饿了么&朴园钜惠补贴★★★★★</span>
            </div>
            <div class="shop_topList">
              <div v-for="(item,index) in shop_list" :key="index" class="shop_list">
                <img
                  src="https://cube.elemecdn.com/5/31/f465010a329b5fce6a118e8e8500ejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                />
                <div class="shop_list_name">湘味小炒肉</div>
                <div class="shop_list_rate">
                  <span>月售240</span>
                  <span>好评率95%</span>
                </div>
                <div class="shop_list_much">
                  <span>
                    <span>￥</span>18
                  </span>
                  <div class="shop_list_much_number">
                    <span>
                      <svg
                        t="1575809640099"
                        class="icon"
                        viewBox="0 0 1028 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1460"
                        width="100%"
                        height="100%"
                      >
                        <path
                          d="M515.863273 1024c-282.321455 0-512-229.678545-512-512 0-282.298182 229.678545-512 512-512s512 229.701818 512 512C1027.863273 794.321455 798.184727 1024 515.863273 1024zM515.863273 44.520727C258.094545 44.520727 48.384 254.231273 48.384 512s209.710545 467.502545 467.479273 467.502545S983.342545 769.768727 983.342545 512 773.632 44.520727 515.863273 44.520727z"
                          fill="#2396ff"
                          p-id="1461"
                        />
                        <path
                          d="M750.126545 531.549091c-4.026182 4.002909-9.565091 6.516364-15.732364 6.516364L298.449455 538.065455c-12.311273 0-22.272-9.960727-22.272-22.272 0-12.288 9.960727-22.248727 22.248727-22.248727l435.968 0c12.334545-0.023273 22.295273 9.937455 22.272 22.248727C756.689455 521.960727 754.176 527.522909 750.126545 531.549091z"
                          fill="#2396ff"
                          p-id="1462"
                        />
                      </svg>
                    </span>
                    <span>1</span>
                    <span>
                      <svg
                        t="1575809218112"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1338"
                        width="100%"
                        height="100%"
                      >
                        <path
                          d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                          fill="#2396ff"
                          p-id="1339"
                        />
                        <path
                          d="M713.216 462.336H310.784c-27.648 0-49.664 22.528-49.664 49.664s22.528 49.664 49.664 49.664h402.432c27.648 0 49.664-22.528 49.664-49.664s-22.528-49.664-49.664-49.664z"
                          fill="#ffffff"
                          p-id="1340"
                        />
                        <path
                          d="M462.336 310.784v402.432c0 27.648 22.528 49.664 49.664 49.664s49.664-22.528 49.664-49.664V310.784c0-27.648-22.528-49.664-49.664-49.664s-49.664 22.528-49.664 49.664z"
                          fill="#ffffff"
                          p-id="1341"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop_content">
              <div class="shop_content_anchor" ref="goodMenu">
                <ul>
                  <li
                    v-for="(item ,index) in menus_list"
                    :key="index"
                    :class="{active: currentIndex === index}"
                    @click="selectLeft(index)"
                    ref="lItem"
                  >{{ item.name }}</li>
                </ul>
              </div>
              <div class="shop_content_main" ref="goodList">
                <ul>
                  <li v-for="(items, index) in menus_list" :key="index" ref="rItem">
                    <p class="shop_content_main_desc">
                      <span>{{ items.name }}</span>
                      {{ items.description}}
                    </p>
                    <div
                      class="shop_content_main_food"
                      v-for="(item, key) in items.foods"
                      :key="key"
                    >
                      <div class="item">
                        <img :src="item.img_url" />
                        <div class="food_item">
                          <h4>{{ item.name }}</h4>
                          <p>{{ item.materials }}</p>
                          <div class="rate">
                            <span>月售{{ item.sell }}份</span>
                            <span>好评率{{ item.rate }}%</span>
                          </div>
                          <div class="food_bottom">
                            <span>
                              <span>￥</span>
                              <span>{{item.sale}}</span>
                            </span>
                            <div>
                              <span @click="deleteShop(item)" v-if="item.count > 0">
                                <svg
                                  t="1575809640099"
                                  class="icon"
                                  viewBox="0 0 1028 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="1460"
                                  width="100%"
                                  height="100%"
                                >
                                  <path
                                    d="M515.863273 1024c-282.321455 0-512-229.678545-512-512 0-282.298182 229.678545-512 512-512s512 229.701818 512 512C1027.863273 794.321455 798.184727 1024 515.863273 1024zM515.863273 44.520727C258.094545 44.520727 48.384 254.231273 48.384 512s209.710545 467.502545 467.479273 467.502545S983.342545 769.768727 983.342545 512 773.632 44.520727 515.863273 44.520727z"
                                    fill="#2396ff"
                                    p-id="1461"
                                  />
                                  <path
                                    d="M750.126545 531.549091c-4.026182 4.002909-9.565091 6.516364-15.732364 6.516364L298.449455 538.065455c-12.311273 0-22.272-9.960727-22.272-22.272 0-12.288 9.960727-22.248727 22.248727-22.248727l435.968 0c12.334545-0.023273 22.295273 9.937455 22.272 22.248727C756.689455 521.960727 754.176 527.522909 750.126545 531.549091z"
                                    fill="#2396ff"
                                    p-id="1462"
                                  />
                                </svg>
                              </span>
                              <span v-else class="hidden" />
                              <span v-if="item.count > 0">{{ item.count }}</span>
                              <span v-else class="hidden" />
                              <span @click="addShop(item)">
                                <svg
                                  t="1575809218112"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="1338"
                                  width="100%"
                                  height="100%"
                                >
                                  <path
                                    d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                    fill="#2396ff"
                                    p-id="1339"
                                  />
                                  <path
                                    d="M713.216 462.336H310.784c-27.648 0-49.664 22.528-49.664 49.664s22.528 49.664 49.664 49.664h402.432c27.648 0 49.664-22.528 49.664-49.664s-22.528-49.664-49.664-49.664z"
                                    fill="#ffffff"
                                    p-id="1340"
                                  />
                                  <path
                                    d="M462.336 310.784v402.432c0 27.648 22.528 49.664 49.664 49.664s49.664-22.528 49.664-49.664V310.784c0-27.648-22.528-49.664-49.664-49.664s-49.664 22.528-49.664 49.664z"
                                    fill="#ffffff"
                                    p-id="1341"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop_order">
              <div :class="[shopFee ? 'haveShop' : 'notShop']" class="shop_order_shoppingcar">
                <van-dropdown-menu :z-index="-1" direction="up">
                  <van-icon
                    class="shop_order_shoppingcar_logo"
                    @click="onConfirm"
                    name="shopping-cart"
                    :info="shopCount ? shopCount : null"
                  />
                  <van-dropdown-item ref="item">
                    <div class="clearShop">
                      <p>已选商品</p>
                      <span @click="clearShop">
                        <van-icon name="bag-o" />清空
                      </span>
                    </div>
                    <li v-for="(item, index) in selectedItems" :key="index">
                      <p>{{ item.name }}</p>
                      <div>
                        <p>￥{{ item.totalPrice }}</p>
                        <div>
                          <span @click="deleteShop(item)">
                            <svg
                              t="1575809640099"
                              class="icon"
                              viewBox="0 0 1028 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="1460"
                              width="100%"
                              height="100%"
                            >
                              <path
                                d="M515.863273 1024c-282.321455 0-512-229.678545-512-512 0-282.298182 229.678545-512 512-512s512 229.701818 512 512C1027.863273 794.321455 798.184727 1024 515.863273 1024zM515.863273 44.520727C258.094545 44.520727 48.384 254.231273 48.384 512s209.710545 467.502545 467.479273 467.502545S983.342545 769.768727 983.342545 512 773.632 44.520727 515.863273 44.520727z"
                                fill="#2396ff"
                                p-id="1461"
                              />
                              <path
                                d="M750.126545 531.549091c-4.026182 4.002909-9.565091 6.516364-15.732364 6.516364L298.449455 538.065455c-12.311273 0-22.272-9.960727-22.272-22.272 0-12.288 9.960727-22.248727 22.248727-22.248727l435.968 0c12.334545-0.023273 22.295273 9.937455 22.272 22.248727C756.689455 521.960727 754.176 527.522909 750.126545 531.549091z"
                                fill="#2396ff"
                                p-id="1462"
                              />
                            </svg>
                          </span>
                          <span>{{ item.count }}</span>
                          <span @click="addShop(item)">
                            <svg
                              t="1575809218112"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="1338"
                              width="100%"
                              height="100%"
                            >
                              <path
                                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                fill="#2396ff"
                                p-id="1339"
                              />
                              <path
                                d="M713.216 462.336H310.784c-27.648 0-49.664 22.528-49.664 49.664s22.528 49.664 49.664 49.664h402.432c27.648 0 49.664-22.528 49.664-49.664s-22.528-49.664-49.664-49.664z"
                                fill="#ffffff"
                                p-id="1340"
                              />
                              <path
                                d="M462.336 310.784v402.432c0 27.648 22.528 49.664 49.664 49.664s49.664-22.528 49.664-49.664V310.784c0-27.648-22.528-49.664-49.664-49.664s-49.664 22.528-49.664 49.664z"
                                fill="#ffffff"
                                p-id="1341"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  </van-dropdown-item>
                </van-dropdown-menu>
              </div>
              <div class="shop_order_sendfee">
                <p v-if="!shopFee">未选购商品</p>
                <p v-if="!shopFee">另需配送费2元</p>
                <p class="chioseFee" v-if="shopFee">￥{{ shopFee }}</p>
              </div>
              <div
                class="shop_order_much"
                :class="[ shopFee >= 15 ? 'greenBacground' : 'grayBackgrund' ]"
              >
                <p v-if="!shopFee">￥15起送</p>
                <p v-if="shopFee && shopFee < 15">还差￥{{ poorFee }} 起送</p>
                <p v-else @click="toSettlement">去结算</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="评价" name="b">内容 2</van-tab>
          <van-tab title="商家" name="c">内容 3</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      haveImgLogo: true,
      imgStyle: {
        backgroundImage:
          "url('https://cube.elemecdn.com/f/52/9be00a8e48eed67be124c3b89f4ffpng.png?x-oss-process=image/format,webp/resize,w_750')",
        backgroundColor: "rgba(0, 0, 0, .2)",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        filter: "blur(0.5px)",
        overflow: "hidden"
      },
      noImgStyle: {
        background: "rgb(0,124,125)"
      },
      activeName: "a",
      rate_value: 5,
      shop_list: [1, 2, 3, 4, 5, 6],
      menus_list: [],
      scrollY: 0, //获取实时滚动位置
      heightList: [], //获取每一个li的高度
      isClick: false,
      selectIndex: 0,

      shopFee: 0, // 已经选购商品的总价格
      shopCount: 0, // 已选购商品的总数量
      poorFee: 0, // 还差多少起送
      selectedItems: [] // 已经选购的商品
    };
  },
  methods: {
    setNavVisiable: function() {
      bus.$emit("visiable", false);
    },
    _scrollInit() {
      this.menuList = new Bscroll(this.$refs.goodMenu, {
        click: true
      });
      this.goodmenu = new Bscroll(this.$refs.goodList, {
        click: true,
        probeType: 3
      });
      this.goodmenu.on("scroll", pos => {
        //获取实时滚动的距离 使用scrollY接收
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    getHeight() {
      const lis = this.$refs.rItem;
      let height = 0;
      this.heightList.push(height);
      lis.forEach(item => {
        height += item.clientHeight;
        this.heightList.push(height);
      });
    },
    selectLeft(index) {
      this.isClick = true;
      this.selectIndex = index;
      let rItem = this.$refs.rItem;
      let el = rItem[index];
      this.goodmenu.scrollToElement(el, 100);
    },
    getFoodsData: function() {
      this.$axios({
        method: "get",
        url: "/get_batch_shop?restaurant_id=1276915"
      }).then(res => {
        for (let i = 0; i < res.list.length; i++) {
          for (let j = 0; j < res.list[i].foods.length; j++) {
            res.list[i].foods[j].count = 0;
          }
        }
        this.menus_list = res.list;
        this.$nextTick(() => {
          this._scrollInit();
          this.getHeight();
        });
      });
    },
    select(index, $event) {
      if (!$event._contructed) {
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName;
    },
    // 清空已选择的商品
    clearShop(){
      this.selectedItems = [];
      this.shopFee = 0;
      this.shopCount = 0;
      this.poorFee = 0;
      this.menus_list.map(item => {
        for(let i=0;i<item.foods.length;i++) {
           item.foods[i].count = 0;
        }
      })
      this.$refs.item.toggle();
    },
    // 点击减号删除商品
    deleteShop(item) {
      const sale = item.sale;
      this.shopFee -= sale;
      for(let i=0;i<this.selectedItems.length;i++) {
        if(this.selectedItems[i].food_id === item.food_id) {
            this.selectedItems[i].totalPrice = Number((this.selectedItems[i].totalPrice - item.sale).toFixed(1));
            this.selectedItems[i].count --;
        }
        if(this.selectedItems[i].count === 0) {
          this.selectedItems.splice(i, 1);
        }
      }
      if (Math.floor(sale) !== sale) {
        this.shopFee = Number(this.shopFee.toFixed(1));
      }
      this.poorFee = (15 - this.shopFee).toFixed(1);
      this.shopCount -= 1;
      for (let key of this.menus_list) {
        if (key.rank_id === item.menus_id) {
          for (let index of key.foods) {
            if (index.food_id === item.food_id) {
              index.count -= 1;
            }
          }
        }
      }
    },
    // 点击加号添加商品
    addShop(item) {
      let sale = item.sale;
      this.shopFee += sale;
      let flag = false;
      for(let i=0;i<this.selectedItems.length;i++) {
        if(this.selectedItems[i].food_id === item.food_id) {
            this.selectedItems[i].totalPrice = Number((this.selectedItems[i].totalPrice + item.sale).toFixed(1));
            this.selectedItems[i].count ++;
            flag = true;
        }
      }
      if(!flag) {
        const shopObj = {
          food_id: item.food_id,
          totalPrice: item.sale,
          sale: item.sale,
          count: 1,
          name: item.name,
        };
        this.selectedItems.push(shopObj);
      }
      if (Math.floor(sale) !== sale) {
        this.shopFee = Number(this.shopFee.toFixed(1));
      }
      this.poorFee = (15 - this.shopFee).toFixed(1);
      this.shopCount += 1;
      for (let key of this.menus_list) {
        if (key.rank_id === item.menus_id) {
          for (let index of key.foods) {
            if (index.food_id === item.food_id) {
              index.count += 1;
            }
          }
        }
      }
    },
    onConfirm() {
      if (this.shopFee) {
        this.$refs.item.toggle();
      }
    },
    // 结算
    toSettlement(){
        this.$router.push({
          name: 'checkout',
        })
    }
  },
  created() {
    this.setNavVisiable();
    this.getFoodsData();
  },
  computed: {
    currentIndex() {
      const index = this.heightList.findIndex((item, index) => {
        return (
          this.scrollY >= this.heightList[index] &&
          this.scrollY < this.heightList[index + 1]
        );
      });
      return index > 0 ? index : 0;
    }
  }
};
</script>

<style lang="less">
.goback {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 10px;
  left: 15px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: rotate(-45deg);
  z-index: 1000;
}
#shop_img {
  position: relative;
  height: 100px;
}
.haveShop {
  background: rgb(49, 144, 232);
  color: white;
}
.notShop {
  background: rgb(54, 54, 54);
  color: rgb(95, 95, 99);
}
.grayBackgrund {
  background: rgb(83, 83, 86) !important;
}
.greenBacground {
  background: rgb(56, 202, 115) !important;
}
.hidden {
  visibility: hidden;
}
.shop {
  width: 100%;
  height: 100vh;
  overflow: auto;
  &_header {
    position: relative;
  }
  &_header_logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    img {
      width: 70px;
      height: 70px;
    }
  }
  &_activity {
    width: 100%;
    margin-top: 30px;
    &_shopName {
      width: 100%;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
      i {
        display: inline-block;
        border-right: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 6px solid rgb(84, 84, 84);
      }
    }
    &_desc {
      width: 100%;
      text-align: center;
      margin-top: 5px;
      font-size: 11px;
      color: #666;
      span {
        margin-right: 10px;
      }
    }
    &_coupons {
      width: 100%;
      text-align: center;
      margin-top: 5px;
      div {
        display: inline-block;
        background: rgb(255, 229, 120);
        height: 25px;
        line-height: 25px;
        overflow: hidden;
        font-size: 12px;
      }
      div:first-child {
        width: 130px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        span {
          display: inline-block;
        }
        span:first-child {
          text-align: center;
          font-size: 17px;
          font-weight: 700;
          color: #594519;
          margin-left: 10px;
          float: left;
          span {
            font-size: 10px;
          }
        }
      }
      div:last-child {
        width: 40px;
        text-align: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }
    &_tag {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 10px;
      div:first-child {
        color: red;
        font-size: 10px;
        span {
          display: inline-block;
          padding-left: 2px;
          padding-right: 2px;
          border: 0.4px solid #eee;
          margin-right: 10px;
        }
      }
      div:last-child {
        font-size: 11px;
        color: #666;
        i {
          display: inline-block;
          border-right: 3px solid transparent;
          border-top: 5px solid #666;
          border-bottom: 3px solid transparent;
          border-left: 3px solid transparent;
        }
      }
    }
    &_announcement {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      font-size: 11px;
      color: #999;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  &_main {
    margin-top: 10px;
    .van-sticky--fixed {
      z-index: 0 !important;
    }
    .shop_banner {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      img {
        width: 90%;
      }
    }
    .shop_rate {
      display: flex;
      align-items: center;
      height: 30px;
      margin-left: 20px;
      span {
        font-size: 13px;
        font-weight: 700;
      }
    }
    .shop_topList {
      overflow-x: scroll;
      overflow-y: hidden;
      height: 180px;
      width: 99%;
      margin: 0 auto;
      white-space: nowrap;
      .shop_list {
        display: inline-block;
        width: 120px;
        margin-left: 15px;
        font-size: 10px;
        img {
          width: 100%;
          height: 80%;
        }
        &_name {
          font-size: 13px;
        }
        &_rate {
          color: #666;
          span {
            margin-right: 3px;
          }
        }
        &_much {
          display: flex;
          width: 100%;
          justify-content: space-between;
          span:first-child {
            font-size: 15px;
            color: red;
            span {
              font-size: 13px;
            }
          }
          &_number {
            width: 50%;
            display: flex;
            justify-content: space-between;
            span {
              display: block;
              height: 15px;
              width: 15px;
              line-height: 15px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  &_category {
    width: 60%;
    margin: 0 auto;
    color: #666;
    span:first-child {
      font-size: 15px;
      font-weight: 700;
      margin-right: 10px;
    }
    span:last-child {
      font-size: 10px;
    }
  }
  &_content {
    height: calc(~"100vh - 45px");
    display: flex;
    justify-content: space-between;
    width: 100%;
    &_anchor {
      height: 100%;
      width: 20%;
      overflow: auto;
      li {
        display: flex;
        align-items: center;
        height: 50px;
        color: #666;
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
        background: rgb(248, 248, 248);
      }
      .active {
        background: white;
      }
    }
    &_main {
      height: 100%;
      width: 78%;
      overflow: auto;
      &_desc {
        font-size: 11px;
        color: #666;
        height: 30px;
        line-height: 30px;
        span {
          font-weight: 700;
          font-size: 12px;
        }
      }
    }
  }
  .shop_content_main_food {
    height: 110px;
    margin-top: 10px;
    display: flex;
    .item {
      display: flex;
      justify-content: space-between;
      img {
        width: 110px;
        height: 100%;
      }
      .food_item {
        margin-left: 10px;
        h4 {
          width: 160px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        > p {
          margin-top: 5px;
          font-size: 10px;
          color: #666;
          width: 160px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .rate {
          margin-top: 5px;
          font-size: 10px;
          color: #666;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .food_bottom {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 50%;
    span:first-of-type {
      color: red;
      width: 20%;
      span:first-of-type {
        font-size: 13px;
      }
      span:last-of-type {
        margin-left: -2px;
      }
    }
    div {
      height: 20px;
      display: flex;
      justify-content: space-between;
      span:first-of-type {
        margin-left: 55px;
      }
      span {
        margin-left: 10px;
        width: 30px;
        height: 20px;
        text-align: center;
      }
    }
  }
  &_order {
    position: fixed;
    height: 50px;
    width: 100%;
    background: rgb(80, 80, 82);
    bottom: 0;
    display: flex;
    &_shoppingcar {
      border-radius: 50%;
      height: 30px;
      width: 30px;
      box-sizing: border-box;
      padding: 20px;
      position: relative;
      border: 5px solid rgb(68, 68, 68);
      margin-left: 30px;
      margin-top: -10px;
      font-size: 28px;
      .clearShop {
        color: #666;
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        height: 10px;
        align-items: center;
        padding: 20px;
        background: rgb(236, 239, 241);
      }
      li {
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        > p {
          color: black;
          font-size: 15px;
        }
        div {
          width: 50%;
          display: flex;
          justify-content: space-between;
          p {
            color: red;
            font-size: 15px;
            display: flex;
            align-items: center;
          }
          div {
            width: 60%;
            display: flex;
            color: black;
            justify-content: space-around;
            font-size: 13px;
            span {
              display: inline-block;
              line-height: 20px;
              text-align: center;
              height: 20px;
              width: 20px;
            }
          }
        }
      }
      .van-dropdown-menu {
        height: 0;
        width: 0;
      }
      .van-dropdown-menu__title::after {
        border: 0px;
      }
      .van-dropdown-item {
        bottom: 50px !important;
      }
      &_logo {
        top: -13px;
        left: -13px;
      }
    }
    &_sendfee {
      margin-left: 20px;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
      .chioseFee {
        width: 80px;
        color: #fff;
        height: 30px;
        font-size: 18px;
        text-align: center;
        line-height: 30px;
      }
    }
    &_much {
      color: white;
      font-size: 15px;
      font-weight: 700;
      height: 100%;
      line-height: 50px;
      width: 110px;
      text-align: center;
      margin-left: 86px;
    }
  }
}
</style>