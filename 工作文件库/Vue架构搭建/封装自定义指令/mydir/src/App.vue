<template>
  <div id="app">
   <input type="text" name="" id="" v-myfocus>
      <firstVm />
      <computedLianxi />
      <vIfElse/>
      <dataFunction />>
  </div>
</template>

<script>

import firstVm from './components/firstVm'
import computedLianxi from './components/computedLianxi'
import vIfElse from './components/vIfElse'
import dataFunction from './components/dataFunction'
export default {
  name: 'App',
  components: {
    firstVm,computedLianxi,vIfElse,dataFunction
  }
}
</script>

<style lang='scss' scoped>

</style>
