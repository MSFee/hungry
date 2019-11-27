<template>
  <div>
      <router-view/>
  </div>
</template>

<script>
import { bus } from '../../main';
export default {
    watch:{
        '$route' : (to,from) =>{
            if(to.name === undefined && from.name === "address") {
                console.log('sss');
                bus.$emit('visiable', true);
            } 
        }
    }
}
</script>

<style>

</style>