<template>
   <div id="app" v-cloak>
    <m-header ></m-header>
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from '@/components/Header.vue'
import mFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    mHeader,
    mFooter,
  },
  created(){
    
  },
  methods: {

  },
  watch:{
    $route() {   
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
