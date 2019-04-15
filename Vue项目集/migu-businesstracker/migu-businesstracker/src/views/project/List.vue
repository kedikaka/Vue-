<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">项目列表</h1>
      <ol class="breadcrumb">
        <li class="active">查看所有的项目</li>
      </ol>



    </div>
    <!-- End Page Header -->


    <div class="container-padding">

      <div class="row">

        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              搜索项目
              <ul class="panel-tools">
                <li>
                  <a class="icon minimise-tool">
                    <i class="fa fa-minus"></i>
                  </a>
                </li>
                <li>
                  <a class="icon expand-tool">
                    <i class="fa fa-expand"></i>
                  </a>
                </li>
                <li>
                  <a class="icon closed-tool">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="panel-body">
              <form class="form-horizontal">



                <div class="form-group">
                  <label for="input001" class="col-sm-2 control-label form-label">搜索项目</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" v-model="searchKeyword" class="form-control">
                    <span id="helpBlock" class="help-block">输入项目名称，支持模糊搜索。</span>
                  </div>
                </div>

                <div class="col-sm-offset-2 col-sm-10">
                  <a type="submit" @click="search" class="btn btn-default">搜索</a>
                  <router-link :to="{ path: '/project/create'}" class="btn btn-success">新建项目</router-link>
                </div>
              </form>

            </div>

          </div>
        </div>

      </div>


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
                    <td>项目名称</td>
                    <td>主管用户名</td>
                    <td>主管姓名</td>
                    <td>状态</td>
                    <td>起始时间</td>
                    <td>结束时间</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <tr v-for="(entity, index) of listData" v-bind:key="index">
                    <td># <b>{{entity.projectName}}</b></td>
                    <td>{{entity.manageUserName}}</td>
                    <td>{{entity.manageRealName}}</td>
                    <td>

                      <div v-html="getProjectStatusHtml(entity.projectStatus)"></div>
                    </td>
                    <td>{{entity.beginDate}}</td>
                    <td>{{entity.endDate}}</td>
                    <td>
                      <router-link :to="{ path: '/project/update', query:{ projectId: entity.projectId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                      <router-link :to="{ path: '/project/detail', query:{ projectId: entity.projectId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>
                      <router-link :to="{ path: '/process/list', query:{ projectId: entity.projectId}}" class="btn-xs btn-rounded btn-primary">查看流程</router-link>
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
    name: "Login",
    data() {
      return {
        searchKeyword: '',
        listData: []
      };
    },
    mounted() {
      this.search();
    },

    methods: {
      getAlternateClass: function (index) {
        let flag = common.function.checkOdevity(index);
        return flag ? "info" : "active";
      },
      getProjectStatusHtml(status) {
        switch (status) {
          case 10:
            return '<span class="btn-xs btn-default btn-option1">已创建</span>';
          case 20:
            return '<span class="btn-xs btn-default btn-success">进行中</span>';
          case 30:
            return '<span class="btn-xs btn-default btn-option3">已完成</span>';
          case 40:
            return '<span class="btn-xs btn-default btn-danager">已放弃</span>';
          case 41:
            return '<span class="btn-xs btn-default btn-option2">挂起</span>';
          default:
            return (
              '<span class="btn-xs btn-default btn-option4">未知' +
              status +
              "</span>"
            );
        }
      },
      search() {
        if (this.searchKeyword == '') {
          ajax.get("/restapi/project")
            .then(response => {
              this.listData = response._embedded.projectEntities;
            });
        }
        else{
          let keyword = '%' + this.searchKeyword + '%';
          ajax.get("/restapi/project/search/findByProjectNameLike", {
            'projectName': keyword
          })
          .then(response => {
            this.listData = response._embedded.projectEntities;
        });
        }



      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
