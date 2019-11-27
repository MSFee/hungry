<template>
  <div>
      <HelloWorld msg="测试"></HelloWorld>
       <router-view/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    components: {
    HelloWorld
  },
}
</script>

<style>

</style>