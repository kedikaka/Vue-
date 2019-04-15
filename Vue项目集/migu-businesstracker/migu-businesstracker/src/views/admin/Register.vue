<template>
  <div>
<section id="wrapper" class="login-register" style="background:url(../../../static/eliteadmin/plugins/images/login/19.jpg) no-repeat center center / cover !important">
  <div class="login-box">
    <div class="white-box">
      <form class="form-horizontal form-material" id="loginform" action="index.html">
        <h3 class="box-title m-b-20">申请注册</h3>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="用户名" v-model="dataForm.userName"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="真实姓名" v-model="dataForm.realName"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="手机号码" v-model="dataForm.cellphone"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="邮箱" v-model="dataForm.email"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="公司名" v-model="dataForm.companyName"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" required="" placeholder="部门名" v-model="dataForm.depName"/>
          </div>
        </div>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="password" required="" placeholder="输入密码" v-model="dataForm.password"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <input class="form-control" type="password" required="" placeholder="重复输入密码" v-model="dataForm.rePassword"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="checkbox checkbox-primary p-t-0">
              <input id="checkbox-signup" type="checkbox">
              <label for="checkbox-signup" style="font-size: 14px;"> 我同意 <a href="#">注册条款</a></label>
            </div>
          </div>
        </div>
        <div class="form-group text-center m-t-20">
          <div class="col-xs-12">
            <a class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" 
            type="submit" @click="register" 
            href="javascript:void(0);">注册</a>
          </div>
        </div>
        <div class="form-group m-b-0">
          <div class="col-sm-12 text-center">
            <p>已有账户? 
                
                <router-link tag='a' :to="'/admin/login'" class="text-primary m-l-5"><b>登陆</b></router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import {jquery} from '../../assets/eliteadmin/plugins/bower_components/jquery/dist/jquery.min.js';
import {bootstrap} from '../../../static/eliteadmin/bootstrap/dist/js/bootstrap.min.js';
import {sidebarnav} from '../../../static/eliteadmin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js';
import {jqueryslimscroll} from '../../../static/eliteadmin/js/jquery.slimscroll.js';
import {waves} from '../../../static/eliteadmin/js/waves.js';
import {custom} from '../../../static/eliteadmin/js/custom.js';
import {styleswitcher} from '../../../static/eliteadmin/plugins/bower_components/styleswitcher/jQuery.style.switcher.js';

import ajax from "@/common/ajax";

export default {
  name: 'Register',
  data () {
    return {

      dataForm: {
        userName: '',
        realName: '',
        cellphone: '',
        email: '',
        companyName: '',
        depName: '',
        password: '',
        rePassword: '',
      }
    
    }
  },
  methods:{
    verifyDate(){
        if(!this.dataForm.userName){
            return '用户名';
        }
        if(!this.dataForm.realName){
            return '真实姓名为空';
        }
        if(!this.dataForm.cellphone){
            return '手机为空';
        }
        if(!this.dataForm.email){
            return '邮箱为空';
        }
        if(!this.dataForm.companyName){
            return '公司名';
        }
        if(!this.dataForm.depName){
            return '部门名为空';
        }
        if(!this.dataForm.password){
            return '密码为空';
        }
        
        if(this.dataForm.password != this.dataForm.rePassword){
            alert(this.dataForm.password);
            alert(this.dataForm.rePassword);
            return '两次密码不一致';
        }
        return '';
    },
    register() {
        var error_msg = this.verifyDate();
        if(error_msg){
            alert(error_msg);
            return false;
        }

        var param_data = this.dataForm;
        console.log(param_data);

        ///api/admin/register
        var result_en = ajax.post(
          '/api/admin/register', 
          param_data
        ).then(response=>{
            alert('注册成功，请转入【登录页】登录！');
        });

        
    },
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../static/eliteadmin/bootstrap/dist/css/bootstrap.min.css';
@import '../../../static/eliteadmin/css/animate.css';
@import '../../../static/eliteadmin/css/style.css';
@import '../../../static/eliteadmin/css/colors/default-dark.css';
</style>