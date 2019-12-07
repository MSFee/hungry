<template>
  <div id="app">
      <router-view />
    <Nav v-if="visiable"/>
  </div>
</template>
<script>
import {bus} from './main';
import Nav from './views/nav/index.vue';
export default {
  components: {
    Nav
  },
  data(){
    return {
      active: 0,
      visiable: true,
    }
  },
  created(){
     bus.$on('visiable', data => {
        this.visiable = data;
    })
  }
}
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}


</style>
