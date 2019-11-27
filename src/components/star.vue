<template>
 <div class="scoreBox">
        <div class="starBox">
            <span  v-for="(item,index) in itemClasslass" :key="index" :class="item" class="star_item"></span>
        </div>
        <div class="cellBox">
          <span  v-for="n in 10" @click="getIndex(n)" :key="n"></span>
        </div>
        <div class="scoreInfo">
            <span :class="scoreInfo"></span>
            <span>{{scoreText}}</span>
        </div>
</div>
</template>

<script>
const lengths = 5;   //总星数
const starOn = 'star-full';  
const starHalf = 'star-half';
const starOff = 'star-empty'
const satisfied = 'satisfied'
const dissatisfied = 'dissatisfied'
const general = 'general'
const verydissatisfied = 'verydissatisfied'
export default {
    data(){
        return {
        score:'',
        scoreText:'',
        }
    },
    computed:{
        itemClasslass(){
            let result = [];
            // let this.score=3;
            let score = Math.floor(this.score * 2) / 2;
            let starhalf = score%1 != 0 ? true : false ;
            let fullstar = Math.floor(score);
            for(var i=0 ; i<fullstar;i++){//放全星
            result.push(starOn);
            }
            if(starhalf){//放半星
            result.push(starHalf)
            }
            if(result.length < lengths){//如果没有满到五个星就用灰色的星星补齐
            var offstar = lengths - result.length;
            for(var i=0;i<offstar;i++){
                result.push(starOff);
            }
            };
            return result;
        },
        scoreInfo(){
        if(this.score>0&&this.score<=1.5){
            this.scoreText='很不满意'
            return 'verydissatisfied'
        }else if (this.score>1.5&&this.score<=2.5) {
            this.scoreText='不满意'
            return 'dissatisfied'
        }else if (this.score>2.5&&this.score<=4) {
            this.scoreText='一般'
            return 'general'
        }else if (this.score>3.5&&this.score<=5) {
            this.scoreText='满意'
            return 'satisfied'
        }else{
            this.score=''
            return ''
        }
        }
    },
    watch:{
        scoreText:function(){
        this.scoreText=this.scoreText
        },
    
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.starBox {
    @include wh(480px,60px);
    position: absolute;
    bottom: pxTorem(45px);
    left: pxTorem(-30px);
}
 
.starBox span {
    @include wh(60px,60px,block);
    float: left;
    margin-left: pxTorem(30px);
}
 
.cellBox {
    position: absolute;
    bottom: pxTorem(45px);
    left: pxTorem(-30px);
    @include wh(480px,60px)
}
 
.cellBox span {
    @include wh(30px,60px)
    display: block;
    float: left;
}
 
.cellBox span:nth-child(odd) {
    margin-left: pxTorem(30px)
}
 
.notice {
    position: absolute;
    bottom: 0;
    margin-left: pxTorem(10px)
}
 
.scoreInfo {
    @include wh(220px,120px)
    position: absolute;
    right: 0
}
 
.scoreInfo span {
    @include wh(95px,90px)
    display: block;
    float: left;
}
 
.scoreInfo span:nth-child(2) {
    @include wh(110px,90px)
    line-height: pxTorem(90px);
    margin-left: pxTorem(10px);
    font-size: pxTorem(24px) !important
}
 
.star-full,.star-half,.star-empty {
  @include wh(60px,60px)
    display: block;
    background-size: cover;
}
 
.satisfied,.dissatisfied,.general,.verydissatisfied {
    background-size: cover;
}
 
.star-full {
    background-image: url('~@/assets/images/star_full.png')
}
 
.star-empty {
    background-image: url('~@/assets/images/star_empty.png')
}
 
.star-half {
    background-image: url('~@/assets/images/star_half.png')
}
 
.satisfied {
    background-image: url('~@/assets/images/satisfied.png')
}
 
.dissatisfied {
    background-image: url('~@/assets/images/dissatisfied.png');
}
.general {
    background-image: url('~@/assets/images/general.png');
}
.verydissatisfied {
    background-image: url('~@/assets/images/verydissatisfied.png');
}
</style>
