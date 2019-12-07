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
            if(from.name === 'address') {
                bus.$emit('visiable', true);
            }
        }
    }
}
</script>

<style>

</style>