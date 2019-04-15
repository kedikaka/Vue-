<template>
  <div id="app">
   <!-- <router-link  to="/first">切换到first组件</router-link>
   <router-link  to="/two">切换到two组件</router-link>
   <router-link  to="/three">切换到three组件</router-link>
   <p>{{name}}</p>  -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    this.$tips("你好呀，我是tips框");
    console.log(this.$store.state.name);
    $('p').css({
      'font-size':"30px"
      // color:"red"
    })
    console.log(this.$getUrlData("num"))
    
    if(this.$getUrlData("num").num == "3"){
      this.$router.push('/three')
    }
    if(this.$getUrlData("num").num == "1"){
      this.$router.push('/first')
    }
    if(this.$getUrlData("num").num == "2"){
      this.$router.push("/two")
    }
  },
  computed:{
    ...mapState('a',{
      name:state => state.exampleState
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  max-width: 12rem;
  margin: auto;
  // width: 12rem;
  height: 100%;
  // background: $mycolor;
}
</style>
