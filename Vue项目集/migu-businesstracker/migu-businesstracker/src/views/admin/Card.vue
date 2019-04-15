<template>
  <div>
    1222222222221212
  </div>
</template>



<script>

import ajax from "@/common/ajax";

export default {
  name: 'Login',
  data() {
    return {
      msg: "i'm login page",
      userName: '',
      password: ''
    };
  },
  methods: {
    login() {
    
        var result_en = ajax.get('/api/admin/login', {
          params: {
            userName: this.userName,
            password: this.password
          }
        }).then(response=>{
            alert('登录成功');
            
        });

        
    },
    test(){
       
    },
    register() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>