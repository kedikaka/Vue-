<template>
  <div>
    <section id="wrapper" class="login-register" style="background:url(../../../static/eliteadmin/plugins/images/login/1.jpg) no-repeat center center / cover !important">
      <div class="login-box">
        <div class="white-box">
          <form class="form-horizontal form-material" id="loginform" action="index.html">
            <h3 class="box-title m-b-20">咪咕-业务追踪平台</h3>
            <div class="form-group ">
              <div class="col-xs-12">
                <input id='un' class="form-control" type="text" required="" placeholder="用户名/手机/邮箱" v-model="userName" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12">
                <input class="form-control" type="password" required="" placeholder="密码" v-model="password" />
              </div>
            </div>
            <div class="input-group bootstrap-touchspin">
              <input id="tch5" type="text" class="form-control" name="tch5" placeholder="输入用户名后，点击发送获取验证码" v-model="verifyCode" style="display: block;" />

                <span class="input-group-btn">
                    <button @click="sendSms" class="btn btn-default btn-outline bootstrap-touchspin-down" type="button">发送</button>
                </span>

            </div>
            <br />
            <div class="form-group">
              <div class="col-md-12">
                <div class="checkbox checkbox-primary pull-left p-t-0">
                  <input id="checkbox-signup" type="checkbox">
                  <label for="checkbox-signup"> 记住我 </label>
                </div>
                <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right">
                  <i class="fa fa-lock m-r-5"></i> 忘记密码?</a>
              </div>
            </div>
            <div class="form-group text-center m-t-20">
              <div class="col-xs-12">
                <a class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" @click="login" href="javascript:void(0);">登录</a>
              </div>
            </div>

            <div class="form-group m-b-0">
              <div class="col-sm-12 text-center">
                <p>还没有账户?
                  <router-link tag='a' :to="'/admin/register'" class="text-primary m-l-5"><b>申请</b></router-link>
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
  import {
    jquery
  } from '../../assets/eliteadmin/plugins/bower_components/jquery/dist/jquery.min.js';

  import {
    bootstrap
  } from '../../../static/eliteadmin/bootstrap/dist/js/bootstrap.min.js';
  import {
    sidebarnav
  } from '../../../static/eliteadmin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js';
  import {
    jqueryslimscroll
  } from '../../../static/eliteadmin/js/jquery.slimscroll.js';
  import {
    waves
  } from '../../../static/eliteadmin/js/waves.js';
  import {
    custom
  } from '../../../static/eliteadmin/js/custom.js';
  import {
    styleswitcher
  } from '../../../static/eliteadmin/plugins/bower_components/styleswitcher/jQuery.style.switcher.js';

  import ajax from "@/common/ajax";

  export default {
    name: 'Login',
    data() {
      return {
        msg: "i'm login page",
        userName: '',
        verifyCode: '',
        password: ''
      };
    },
    methods: {
      login() {
        var result_en = ajax.get('/api/admin/login', {
            userName: this.userName,
            password: this.password,
            verifyCode: this.verifyCode
        }).then(response => {
          let loginEn = response;
          Cookies.set('loginUser', loginEn.userId);
          this.$router.push({
            path: '/Home'
          });
        });

      },

      sendSms(){
        var result_en = ajax.get('/api/admin/sendVerifyCodeSms', {

            userName: this.userName,
            cellphone: this.userName,
            email: this.userName

        }).then(response => {
          alert('短信已发送！')
        });
      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/eliteadmin/bootstrap/dist/css/bootstrap.min.css";
  @import "../../../static/eliteadmin/css/animate.css";
  @import "../../../static/eliteadmin/css/style.css";
  @import "../../../static/eliteadmin/css/colors/default-dark.css";

  a {
    text-decoration: none;
    color: #333;
  }

</style>
