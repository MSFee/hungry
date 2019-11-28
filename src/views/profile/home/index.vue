<template>
    <div class="profile">
        <div class="profile_header">
            <div class="profile_header_main">
                <div class="profile_header_img">
                    <van-image
                        round
                        width="100%"
                        height="100%"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </div>
                <div class="profile_header_info">
                    <div>38ba83b97</div>
                    <div><van-icon name="phone-o" />1522****5271</div>
                </div>
                <div class="profile_header_deatil" />
            </div>
        </div>
        <div class="profile_topcontent">
            <div class="profile_topcontent_envelope">
                <div><span>0</span><span>个</span></div>
                <div>红包</div>
            </div>
            <div class="profile_topcontent_coins">
                <div><span>28</span><span>个</span></div>
                <div>金币</div>
            </div>
        </div>
        <div class="profile_address public">
            <div>
                <span> <van-icon color="rgb(74,165,240)" name="location" /> 我的地址</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_coinsSupmark public">
            <div>
                <span> <van-icon color="rgb(148, 217, 74)" name="shopping-cart" /> 金币商城</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_sread public">
            <div>
                <span> <van-icon color="rgb(252, 123, 83)" name="point-gift" /> 分享拿20元现金</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_coinsSupmark public">
            <div>
                <span> <van-icon color="rgb(74,165,240)" name="service" /> 我的客服</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_coinsSupmark public">
            <div>
                <span> <van-icon color="rgb(74,165,240)" name="gem" /> 下载饿了么APP</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_sread public">
            <div>
                <span> <van-icon color="rgb(74,165,240)" name="column" /> 规则中心</span>
            </div>
            <div class="detail" />
        </div>
        <div class="profile_persional">
            隐私政策
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        test(){
            this.$router.push('/profile/address');
        },
    }
}
</script>

<style lang="less">
@topcontent_font_color: #666;
@topcontent_font_size: 12px;
@main_padding:12px;
    .profile {
        width: 100%;
        background: rgb(245,245,245);
        height:calc(~"100vh - 60px");
        overflow-y: auto;
        .profile_header{
            width: 100%;
            height: 113px;
            background: rgb(0,146,255);
            display: flex;
            justify-content: center;
            align-items: center;
            .profile_header_main {
                height: 70px;
                width: 90%;
                position: relative;
                display: flex;
                align-content: center;
                align-items: center;
                color: white;
                .profile_header_img {
                    width: 60px;
                    height: 60px;
                }
                .profile_header_info {
                    margin-left: 20px;
                    div:first-child {
                        font-weight: 700;
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    div:last-child {
                        font-size: 11px;
                    }
                }
                .profile_header_deatil {
                    width: 6px;
                    height: 6px;
                    position: absolute;
                    right: 0;
                    border-top: 2px solid white;
                    border-right: 2px solid white;
                    transform: rotate(45deg);
                }
            }
        }
        .profile_topcontent {
            margin-bottom: 12px;
            height: 73px;
            background: white;
            display: flex;
            box-sizing: border-box;
            & > div {
                width: 50%;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20px;
            }
            &_envelope {
                border-right: 1px solid #eee;
                div:first-child {
                    span {
                        color:rgb(255,95,62);
                    }
                    span:first-child {
                        font-size: 25px;
                        font-weight: 700;
                    }
                    span:last-child {
                        font-size: 12px;
                    }
                }
                div:last-child {
                    font-size: @topcontent_font_size;
                    color:@topcontent_font_color;
                }
            }
            &_coins {
                 div:first-child {
                    span {
                        color: rgb(106, 194, 11); 
                    }
                    span:first-child {
                        font-size: 25px;
                        font-weight: 700;
                    }
                    span:last-child {
                        font-size: 12px;
                    }
                }
                div:last-child {
                     font-size: @topcontent_font_size;
                     color:@topcontent_font_color;
                }
            }
        }
        .profile_address {
            margin-bottom: 12px;
        }
        .profile_sread {
            margin-bottom: 12px;
        }
        .profile_persional {
            width: 100%;
            height: 60px;
            color: #4da6f0;
            text-align: center;
            line-height: 50px;
        }
    }
    .public {
        width: 100%;
        background: white;
        padding: @main_padding;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
    }
    .detail {
        width: 6px;
        height: 6px;
        border-top: 2px solid #ddd;
        border-right: 2px solid #ddd;
        position: absolute;
        right: 15px;
        transform: rotate(45deg);
    }
</style>