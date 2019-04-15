<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">步骤【{{stepEn.stepName}}】角色列表</h1>
      <ol class="breadcrumb">
        <li class="active">查看步骤内的所有成员列表</li>
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
                <router-link :to="{ path: '/step/UserCreate', query:{ stepId: stepId}}" class="btn btn-success" style="color:white;">新建步骤成员</router-link>
              </span>
            </div>

            <div class="panel-body">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <td>姓名</td>
                    <td>用户名</td>
                    <td>角色</td>
                    <td>创建时间</td>
                    <td>备注</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <tr v-for="(entity, index) of listData" v-bind:key="index">
                    <td># <b>{{entity.userRealName}}</b></td>
                    <td>{{entity.userName}}</td>
                    <td>
                      {{entity.businessName}}{{entity.roleName}}
                    </td>
                    <td>{{entity.createDate}}</td>
                    <td>
                      {{entity.remark}}
                    </td>
                    <td style="text-align: center;">
                      <router-link :to="{ path: '/stepRole/create'}" class="btn btn-rounded btn-default btn-xs" style="width: 80px;">用户详情</router-link>
                      <a href="javascript:void();" @click="deleteUserRelation(entity)" class="btn btn-rounded btn-danger btn-xs">移除</a>
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
    name: "stepUserList",
    data() {
      return {
        stepId: this.$route.query.stepId,
        listData: {},
        stepEn: {},

        getDeleteUserRelationApi: common.business.getDeleteUserRelationApi,
        getStatusButtonHtml: common.stringCommon.getStatusButtonHtml
      };
    },
    mounted() {
      this.getStep();
      this.search();
    },
    methods: {
      getStep() {
        let apiUri = "/restapi/step/" + this.stepId;
        ajax.get(apiUri).then(response => {
          this.stepEn = response;
        });
      },
      search() {
        let apiUri = '/api/step/stepUserRelation';
        var result_en = ajax
          .get(apiUri, {
            stepId: this.stepId
          })
          .then(response => {
            this.listData = response;
          });
      },
      deleteUserRelation(entity){
        let apiUri = this.getDeleteUserRelationApi(entity);
        ajax.delete(apiUri).then(response => {
          alert('移除成功！')
        });
      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
