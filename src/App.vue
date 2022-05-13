<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHide"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}


</script>



<style lang="less">

</style>
