<template>
  <div>
      二级路由内容
  </div>
</template>

<script>
import { bus } from '../../../main';
export default {
  methods: {
    setNavVisiable:function() {
      bus.$emit('visiable',false);
    }
  },
  created(){
    this.setNavVisiable();
  }
}
</script>

<style>

</style>