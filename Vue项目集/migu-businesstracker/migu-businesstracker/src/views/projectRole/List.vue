<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">角色列表</h1>
      <ol class="breadcrumb">
        <li class="active">查看所有角色列表</li>
      </ol>
    </div>
    <!-- End Page Header -->

    <div class="container-padding">

      <!-- Start Row -->
      <div class="row">


        <!-- Start Panel -->
        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              搜索结果
              <span style="float:right;">
                <router-link :to="{ path: '/projectRole/create'}" class="btn btn-success" style="color:white;">新建角色</router-link>
              </span>
            </div>

            <div class="panel-body">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <td>角色名</td>
                    <td>描述</td>
                    <td>状态</td>
                    <td>创建时间</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <tr v-for="(entity, index) of listData" v-bind:key="index">
                    <td># <b>{{entity.roleName}}</b></td>
                    <td>{{entity.roleDesc}}</td>
                    <td>
                      <div v-html='getStatusButtonHtml(entity.status)'>
                      </div>

                    </td>
                    <td>{{entity.createDate}}</td>
                    <td>
                      <router-link :to="{ path: '/projectRole/update', query:{ roleId: entity.roleId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <!-- End Panel -->

      </div>
      <!-- End Row -->
    </div>
  </div>
</template>



<script>
  import ajax from "@/common/ajax";
  import common from "@/common/common";

  export default {
    name: "processList",
    data() {
      return {
        listData: this.search,
        getStatusButtonHtml: common.stringCommon.getStatusButtonHtml
      };
    },
    mounted() {
      this.search();
    },

    methods: {
      search() {
        ajax
          .get("/restapi/projectRole")
          .then(response => {
            this.listData = response._embedded.projectRoleEntities;
        });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
