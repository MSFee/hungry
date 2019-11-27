<template>
<div>
  <div @click="test">测试</div>
  <div @click="sss">在测试</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        test(){
            this.$router.push('/profile/address');
        },
        sss(){
            axios.get('http://122.51.186.39/vue/userinfo').then(res=>{

            })
        }
    }
}
</script>

<style>

</style>