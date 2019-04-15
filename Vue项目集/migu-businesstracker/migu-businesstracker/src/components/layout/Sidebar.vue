<template>
  <!-- //////////////////////////////////////////////////////////////////////////// -->
  <!-- START SIDEBAR -->
  <div class="sidebar clearfix">

    <ul class="sidebar-panel nav">
      <li class="sidetitle">总览</li>
      <li>
        <router-link :to="{ path: '/Home'}">
          <span class="icon color15">
            <i class="fa fa-plus-square-o"></i>
          </span>首页
        </router-link>
      </li>
    </ul>

    <ul class="sidebar-panel nav">
      <li class="sidetitle">项目与管理</li>

      <li v-for="(entity) of listProjectData" v-bind:key="entity.projectId">
        <a class="btnExpand" href="javascript:void(0);">
          <span class="icon color9">
            <i class="fa fa-plus-square"></i>
          </span>{{entity.projectName}}
          <span class="caret"></span>
        </a>
        <ul class="ulExpand" v-show="isShow">
          <li>
            <router-link :to="{ path: '/project/detail', query:{ projectId: entity.projectId}}" >项目流程</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/resource/list'}">资源中心</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/admin/list'}">通讯薄</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{ path: '/project/list'}">
          <span class="icon color15">
            <i class="fa fa-desktop"></i>
          </span>查看全部项目
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/project/create'}">
          <span class="icon color15">
            <i class="fa fa-plus-square-o"></i>
          </span>新建项目
        </router-link>
      </li>

    </ul>


    <ul class="sidebar-panel nav">
      <li class="sidetitle">通用</li>
      <li>
        <router-link :to="{ path: '/admin/list'}">
          <span class="icon color7">
            <i class="fa fa-envelope"></i>
          </span>通讯录</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/projectRole/list'}">
          <span class="icon color12">
            <i class="fa fa-cog"></i>
          </span>项目角色设置</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/home'}">
          <span class="icon color12">
            <i class="fa fa-cog"></i>
          </span>系统设置</router-link>
      </li>
    </ul>

    <div class="sidebar-plan">
      Pro Plan
      <a href="#" class="link">Upgrade</a>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
        </div>
      </div>
      <span class="space">42 GB / 100 GB</span>
    </div>

  </div>
  <!-- END SIDEBAR -->
  <!-- //////////////////////////////////////////////////////////////////////////// -->

</template>


<script>
  import common from "@/common/common";
  import ajax from "@/common/ajax";

  export default {
    name: 'Sidebar',
    data() {
      return {
        listProjectData: this.getAllProject(this.expandEvent),
        isShow: false
      };
    },
    watch: {
      $route(to, from) {
        this.getAllProject(this.expandEvent);
      }
    },
    
    methods: {
      expandEvent: function () {
        $('.btnExpand').bind('click', function () {
          var $ulExpand = $(this).next('.ulExpand');
          if ($ulExpand.is(':visible') == false) {
            $(this).next('.ulExpand').show();
          } else {
            $(this).next('.ulExpand').hide();
          }

        });
      },
      getAllProject: function (expandEvent) {
        let apiUrl = "/restapi/project/search/findByStatus?status=1";
        var result_en = ajax.get(apiUrl).then(response => {
          let lstData = response._embedded.projectEntities;
          for (var index in lstData) {
            lstData[index].isShow = false;
          }
          this.listProjectData = lstData;

          this.$nextTick(function () {
              expandEvent();
          })

        });
      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
