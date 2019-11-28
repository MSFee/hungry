<template>
  <div class="discover">
      <div class="discover_header">
          <div class="discover_header_left">
              <div class="discover_public">
                  金币商城
                  <div>0元好物在这里</div>
              </div>
              <img src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"></img>
          </div>
          <div class="discover_header_right">
              <div class="discover_header_right_box">
                  <div class="discover_public">
                      推荐有奖
                     <div>20元现金拿不停</div>
                  </div>
                  <img src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"></img>
              </div>
              <div class="discover_header_right_box">
                  <div class="discover_public">
                      周边优惠
                      <div>领取口碑好券</div>
                    </div>
                  <img src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"/>
              </div>
          </div>
      </div>
      <div class="discover_body">
          <div class="discover_body_header">
              <div>
                   <span class="line left"></span> 
                   <span><van-icon color="rgb(249,80,75)" name="underway-o" /></span> 
                   <span class="desc">限时好礼</span>
                   <span class="line"></span>
             </div>
             <p>金币换豪礼</p>
          </div>
          <div class="discover_body_main">
              <div class="shops">
                  <div v-for="(item,index) in ret" :key="index" class="shops_list">
                    <div>限时优惠</div>
                    <img src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"></img>
                    <div class="shops_list_envople">3元品质联盟红包</div>
                    <div> 
                        <span>90金币</span> 
                         <span>￥3</span> 
                    </div>
                  </div>
              </div>
          </div>
          <div class="discover_body_footer">
              查看更多 <span class="discover_detail"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            ret: [1,2,3],
        }
    }
}
</script>

<style lang="less">

.discover{
    width: 100%;
    background: rgb(2545,245,245);
    height:calc(~"100vh - 60px");
    overflow: auto;
    &_detail {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-top: 1px solid #ccc;
        border-right:1px solid #ccc; 
        transform: rotate(45deg);
    }
    &_public {
        height: 60px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
        div {
            font-size: 12px;
            margin-top: 5px;
            color:#999;
        }
    }
    &_header{
        display: flex;
        width: 100%;
        background: white;
        margin-bottom: 12px;
        &_left {
            display: flex;
            flex-direction: column;
            width: 50%;
            img {
                width: 70px;
                height: 70px;
                align-self: flex-end;
                margin-right: 20px;
                margin-top: 10px;
            }
        }
        &_right {
            width: 45%;
            &_box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
    &_body {
        width: 100%;
        background: white;
        overflow: hidden;
        &_header {
            margin-top: 15px;
            div {
                width: 100%;
                text-align: center;
                span:nth-child(2) {
                    margin-right: 3px;
                }
                .desc {
                    font-size: 20px;
                    font-weight: 700;
                }
                .line {
                    display: inline-block;
                    border: .45px solid #333;
                    width: 15px;
                    margin: 8px;
                    position: relative;
                }
                .line:after {
                    position: absolute;
                    top:-2px;
                    right: 10px;
                    content: "";
                    background: #333;
                    height: 5px;
                    width: 5px;
                    border-radius: 50%;
                }
                .left:after {
                    left:13px ;
                }
            }
            p {
                font-size: 10px;
                color:#999;
                width: 100%;
                text-align: center
            }
        }
        &_main {
            width: 100%;
            padding: 10px;
            .shops {
                width: 100%;
                display: flex;
                .shops_list{
                    width: 33%;
                    div:first-child {
                        width: 53px;
                        height: 20px;
                        font-size: 12px;
                        text-align: center;
                        line-height:20px ;
                        background: #333;
                        color:white;
                    }
                    img {
                        width: 100%;
                    }
                    &_envople {
                        font-size: 13px;
                    }
                    &_envople + div {
                        margin-top: 5px;
                        span:first-child {
                            font-size: 13px;
                           color: #ff5339;
                           margin-right: 3px;
                        }
                        span:last-child {
                            font-size: 8px;
                            text-decoration: line-through;
                            color:#999;
                        }
                    }
                }
            }
        }
        &_footer {
        width: 100%;
        height: 80px;
        font-size: 15px;
        color:#999;
        text-align: center;
        line-height: 100px;
        margin-bottom: 30px;
    }
    }

}
</style>