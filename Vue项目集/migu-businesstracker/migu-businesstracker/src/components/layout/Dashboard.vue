<template>
  <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <router-view></router-view>
  </div>
</template>

<script>


import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header, Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
