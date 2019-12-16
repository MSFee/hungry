<template>
   <div class="wrap">
          <div class="goodMenu" ref="goodMenu">
            <ul>
              <li v-for="(item ,index) in goodMenu" :key="index"
               :class="{active: currentIndex === index}"
               @click="selectLeft(index)" ref="lItem">{{ item}}</li>
            </ul>
          </div>
      
          <div class="goodList" ref="goodList">
            <ul>
              <li v-for="(items, index) in goodList" :key="index" ref="rItem">
                <p>{{ items.name}}</p>
            
                <div v-for="(item, key) in items.data" :key="key">
                  <div class="item"> {{ item}}</div>
                </div>
              </li>
            </ul>
          </div>
      </div>
</template>

<script>
import {bus} from '../../main';
 import Bscroll from 'better-scroll';
export default {
     data(){
        return {
          goodMenu: ['菜单1', '菜单2','菜单3', '菜单4', '菜单5', '菜单6', '菜单7', '菜单8'],
          goodList: [
            { name: '菜单1', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单2', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']},
            { name: '菜单3', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单4', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单5', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8']},
            { name: '菜单6', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
            { name: '菜单7', data: ['1.1', '1.2', '1.3', '1.4']},
            { name: '菜单8', data: ['1.1', '1.2']},
          ],
          scrollY: 0,//获取实时滚动位置
          heightList: [],//获取每一个li的高度
          isClick: false,
          selectIndex: 0,
        }
     },
    methods: {
      setNavVisiable:function() {
        bus.$emit('visiable',false);
        },
         _scrollInit(){
              this.menuList = new Bscroll(this.$refs.goodMenu, {
                  click: true
              })

              this.goodmenu = new Bscroll(this.$refs.goodList, {
                  probeType: 3
              })
          this.goodmenu.on('scroll', (pos) =>{
              //获取实时滚动的距离 使用scrollY接收         
              this.scrollY = Math.abs(Math.round(pos.y))
          })

      },
       getHeight(){
          //获取每一个li的高度
          const lis = this.$refs.rItem
          //heightList的第一个元素为0
          let height = 0
          this.heightList.push(height)
          //之后的高度即为当前li的高度加上之前面li的高度和
          lis.forEach(item =>{
          height += item.clientHeight
             this.heightList.push(height)
          })
         },
        selectLeft (index) {
            this.isClick = true;
            this.selectIndex = index;
            let rItem = this.$refs.rItem
            let el = rItem[index]
            this.goodmenu.scrollToElement(el, 100)
        }
    },
    computed:{
        currentIndex(){
            const index = this.heightList.findIndex((item, index) =>{
                return this.scrollY >= this.heightList[index] && this.scrollY < this.heightList[index + 1]
            })
        return index > 0 ? index : 0;
        }
    },
    created(){
        // this.getFoodsData();
        this.setNavVisiable();
        this.$nextTick(() => { 
                    this._scrollInit()
                    this.getHeight()
                }) 
    }
}
</script>

<style lang="less">
    .wrap {
        width: 100%;
        height: 100vh;
        display: flex;
        background: #ccc;
        overflow: hidden;
        .goodMenu {
            overflow: auto;
        }
        .goodList {
            overflow: auto;
            .item {
                height: 200px;
                background: red;
            }
        }
    }
    .active {
        background: red;
    }
</style>