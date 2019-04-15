<template>
<div>
  wo shi main
    <router-view></router-view>
</div>
</template>


<script>

export default {
  name: 'Login',
  data () {
    return {
      msg: "i'm login page",
      userName: '',
      password: ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
