<template>
  <div id="app">
    <baseVuexcheck />
  </div>
</template>

<script>
import baseVuexcheck from './components/baseVuexcheck'

export default {
  name: 'App',
  components: {
    baseVuexcheck  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
