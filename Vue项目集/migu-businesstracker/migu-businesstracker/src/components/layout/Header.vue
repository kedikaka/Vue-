<template>
  <!-- //////////////////////////////////////////////////////////////////////////// -->
  <!-- START TOP -->
  <div id="top" class="clearfix">

    <!-- Start App Logo -->
    <div class="applogo">
      <router-link :to="{ path: '/home'}" class="logo">咪咕业务追踪</router-link>
    </div>
    <!-- End App Logo -->

    <!-- Start Sidebar Show Hide Button -->
    <a href="#" class="sidebar-open-button">
      <i class="fa fa-bars"></i>
    </a>
    <a href="#" class="sidebar-open-button-mobile">
      <i class="fa fa-bars"></i>
    </a>
    <!-- End Sidebar Show Hide Button -->

    <!-- Start Searchbox -->
    <form class="searchform" style="width:320px;">
      <input type="text" v-model="searchKeyword" class="searchbox" style="width:320px;" id="searchbox" placeholder="搜索资源（文档、文件、图片）">
      <span class="searchbutton">
        <i @click="search" class="fa fa-search"></i>
      </span>
    </form>
    <!-- End Searchbox -->





    <!-- Start Top Right -->
    <ul class="top-right">

      <li class="dropdown link">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle hdbutton btnCreateNew">创建
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu dropdown-menu-list ulCreateNew">
          <li>
            <a href="#">
              <i class="fa falist fa-th-list"></i>项目</a>
          </li>
          <li>
            <a href="#">
              <i class="fa falist fa-user"></i>用户</a>
          </li>
          <li>
            <hr style="margin-top:0px;margin-bottom:0px;" />
          </li>
          <li>
            <a href="#">
              <i class="fa falist fa-file-pdf-o"></i>文档</a>
          </li>
          <li>
            <a href="#">
              <i class="fa falist fa-file-archive-o"></i>文件</a>
          </li>
          <li>
            <a href="#">
              <i class="fa falist fa-file-photo-o"></i>图片</a>
          </li>
        </ul>
      </li>

      <li class="dropdown link">
        <a id="btnAdminUser" href="#" data-toggle="dropdown" class="dropdown-toggle profilebox">
          <img :src="userAvatar" alt="img">
          <b>{{adminUserEn.realName}}</b>
          <span class="caret"></span>
        </a>
        <ul id="ulAdminUser" class="dropdown-menu dropdown-menu-list dropdown-menu-right">
          <li>
            <a href="#">
              <i class="fa falist fa-wrench"></i>个人信息</a>
          </li>
          <li class="divider"></li>
          <li>
            <a @click="logout" href="javascript:void(0);">
              <i class="fa falist fa-power-off"></i> 注销</a>
          </li>
        </ul>
      </li>

    </ul>
    <!-- End Top Right -->

  </div>
  <!-- END TOP -->
  <!-- //////////////////////////////////////////////////////////////////////////// -->
</template>


<script>
  import ajax from "@/common/ajax";

  export default {
    name: "Header",
    data() {
      return {
        searchKeyword: "",
        adminUserEn: {},
        userAvatar: '',
      };
    },
    mounted() {
      this.bindEvent();
      this.getAdminUser();
      
    },
    methods: {
      bindEvent() {

        $(".btnCreateNew, .ulCreateNew").bind("mouseover", function () {
          $(".ulCreateNew").show();

        });

        $(".btnCreateNew, .ulCreateNew").bind("mouseout", function () {

          $(".ulCreateNew").hide();
        });


        $("#btnAdminUser").bind("click", function () {
          if ($("#ulAdminUser").is(":hidden")) {
            $("#ulAdminUser").show();
          } else {
            $("#ulAdminUser").hide();
          }
        });

      },

      search() {
        this.$router.push({
          path: '/resource/list',
          query: {
            keyword: this.searchKeyword
          }
        });
      },
      getAdminUser() {
        let userId = Cookies.get("loginUser");
        let apiUri = "/restapi/adminUser/" + userId;

        let self = this;
        ajax.get(apiUri).then(response => {
          this.adminUserEn = response;
          this.userAvatar = urIConfig.avatarImagePrefix + this.adminUserEn.avatar;
        }).catch(function (err) {
          if (err.response.status == 404) {
            alert('不存在的用户，请重新登陆！');
            self.$router.push({
              path: '/admin/login'
            });
          }
        });
      },
      logout() {
        Cookies.remove('loginUser');
        this.$router.push({
          path: '/admin/login'
        });
      },
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
