<template>
  <div id="app">
      <router-view />
    <Nav :active.sync="isCheck" v-if="visiable"/>
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
      visiable: true,
      isCheck: null,
    }
  },
  created(){
     bus.$on('visiable', data => {
        this.visiable = data;
    })
  },
  watch: {
    '$route':function(to,from){
      if(to.name === 'main' && from.name === 'shop') {
         this.visiable = true;
      }
    }
  }
}
</script>


<style>
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
::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }

</style>
