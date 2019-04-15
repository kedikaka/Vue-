<template>
  <div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">流程列表</h1>
    <ol class="breadcrumb">
      <li class="active">查看【{{projectEn.projectName}}】的流程</li>
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
        </div>

        <div class="panel-body">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <td>流程名称</td>
                <td>管理人</td>
                <td>状态</td>
                <td>起始时间</td>
                <td>结束时间</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr>
              <tr  v-for="(entity, index) of listData" v-bind:key="index" >
                <td># <b>{{entity.processName}}</b></td>
                <td>{{entity.manageRealName}}</td>
                <td>
                  <div v-html="getProcessStatusHtml(entity.processStatus)"></div>
                </td>
                <td>{{entity.beginDate}}</td>
                <td>{{entity.endDate}}</td>
                <td>
                  <router-link :to="{ path: '/process/update', query:{ processId: entity.processId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                  <router-link :to="{ path: '/process/detail', query:{ processId: entity.processId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>  
                  <router-link :to="{ path: '/step/list', query:{ processId: entity.processId}}" class="btn-xs btn-rounded btn-primary">查看步骤</router-link>  
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
      projectId: this.$route.query.projectId,
      projectEn: {},
      listData: {},

      getProcessStatusHtml: common.stringCommon.getProcessStatusHtml
    };
  },
  watch:{
    '$route' (to, from) {
      this.$router.go(0);
    }
  },
  mounted() {
    this.getProject(this.projectId);
    this.search();
  },

  methods: {
    
    getProject(projectId){
      ajax
        .get("/restapi/project/" + projectId)
        .then(response => {
          this.projectEn = response;
        });
    },
    
    search() {
      ajax
        .get("/restapi/process/search/findByProjectIdOrderByPriorityDesc", {
          projectId: this.projectId
        })
        .then(response => {
          this.listData = response._embedded.processEntities;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>