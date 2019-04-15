<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">业务追踪</h1>
      <ol class="breadcrumb">
        <li class="active">精细、明确、责任到人</li>
      </ol>



    </div>
    <!-- End Page Header -->


    <!-- //////////////////////////////////////////////////////////////////////////// -->
    <!-- START CONTAINER -->
    <div class="container-widget">

      <!-- Start Top Stats -->
      <div class="col-md-12">
        <ul class="topstats clearfix">
          <li class="arrow"></li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-dot-circle-o"></i> 总项目数</span>
            <h3>{{totalEn.projectCount}}</h3>
            <span class="diff">
              所有存在的项目</span>
          </li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-calendar-o"></i> 已完成项目</span>
            <h3>{{totalEn.projectFinishCount}}</h3>
            <span class="diff">
              已经完成的项目</span>
          </li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-shopping-cart"></i> 进行中项目</span>
            <h3 class="color-down">{{totalEn.projectRunningCount}}</h3>
            <span class="diff">
              尚在进行中的项目</span>
          </li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-users"></i> 通讯录人员</span>
            <h3>{{totalEn.adminUserCount}}</h3>
            <span class="diff">
              所有注册的用户</span>
          </li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-eye"></i> 平台资源数量</span>
            <h3 class="color-up">{{totalEn.resourceCount}}</h3>
            <span class="diff">
              包括在线文档、文件等</span>
          </li>
          <li class="col-xs-6 col-lg-2">
            <span class="title">
              <i class="fa fa-clock-o"></i> 最后使用时间</span>
            <h3>5
              <small>分钟前</small>
            </h3>
            <span class="diff">
              最后使用的时间</span>
          </li>
        </ul>
      </div>
      <!-- End Top Stats -->



      <!-- Start Fifth Row -->
      <div class="row">


        <!-- Start Project Stats -->
        <div class="col-md-12 col-lg-6">
          <div class="panel panel-widget">
            <div class="panel-title">
              进行中项目
              <span class="label label-info">top3</span>
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

            <div class="panel-search">
              <form>
                <input type="text" class="form-control" placeholder="Search...">
                <i class="fa fa-search icon"></i>
              </form>
            </div>


            <div class="panel-body table-responsive">

              <table class="table table-hover">
                <thead>
                  <tr>
                    <td>编号</td>
                    <td>项目</td>
                    <td>状态</td>
                    <td>负责人</td>
                    <td class="text-right">更新时间</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(entity, index) of lstRunningProjectEn" v-bind:key="index">
                    <td>{{entity.projectId}}</td>
                    <td>{{entity.projectName}}</td>
                    <td>
                      <span class="label label-default">已完成</span>
                    </td>
                    <td>{{entity.manageRealName}}</td>
                    <td class="text-right">
                      <span>{{entity.beginDate}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <!-- Start Project Stats -->


        <!-- Start Project Stats -->
        <div class="col-md-12 col-lg-6">
          <div class="panel panel-widget">
            <div class="panel-title">
              已完成项目
              <span class="label label-info">TOP3</span>
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

            <div class="panel-search">
              <form>
                <input type="text" class="form-control" placeholder="Search...">
                <i class="fa fa-search icon"></i>
              </form>
            </div>


            <div class="panel-body table-responsive">

              <table class="table table-hover">
                <thead>
                  <tr>
                    <td>编号</td>
                    <td>项目</td>
                    <td>状态</td>
                    <td>负责人</td>
                    <td class="text-right">更新时间</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(entity, index) of lstFinishProjectEn" v-bind:key="index">
                    <td>{{entity.projectId}}</td>
                    <td>{{entity.projectName}}</td>
                    <td>
                      <span class="label label-default">已完成</span>
                    </td>
                    <td>{{entity.manageRealName}}</td>
                    <td class="text-right">
                      <span>{{entity.beginDate}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <!-- Start Project Stats -->


      </div>
      <!-- End Fifth Row -->





      <!-- Start Third Row -->
      <div class="row">




        <!-- Start TwitterBox -->
        <div v-for="(entity, index) of lstLastProjectEn" v-bind:key="index" class="col-md-6 col-lg-3">
          <div class="widget socialbox" :style="getPannelColor(entity)">

            <p class="text">
              <router-link style="font-weight: bold;color: white;" :to="{ path: '/project/detail', query:{ projectId: entity.projectId}}">
                {{entity.projectName}}
              </router-link>
            </p>
            <p class="text-info">
              <span class="textDesc">{{entity.projectDesc}}</span>
              <span class="textAfter"></span>
            </p>
            <p class="text-info">起始时间：{{entity.beginDate}}</p>
            <div class="logo" style="bottom: 5px;">
              <!-- <i :class="'fa ' + entity.icon"></i> -->
            </div>

            <ul class="info" style="bottom: 5px;color:#e4e4e4">
              <li>
                <i class="fa fa-code-fork"></i>{{entity.processCount}}个流程</li>
              <li>
                <i class="fa fa-ellipsis-v"></i>{{entity.stepCount}}个步骤</li>
              <li>
                <i class="fa fa-file-o"></i>{{entity.resourceCount}}个资源</li>
                <li>
                <i class="fa fa-user"></i>{{entity.userCount}}个成员</li>
            </ul>

          </div>
        </div>
        <!-- End TwitterBox -->

      </div>
      <!-- End Third Row -->
      <div class="row">

        <!-- Start Right -->
        <div class="col-md-6">
          <h4>操作日志</h4>
          <!-- Start Files -->
          <div class="panel panel-widget" style="height:450px;">
            <div class="panel-title">
              最近24小时，共计
              <span class="label label-danger">29</span>次操作。
              <ul class="panel-tools">
                <li>
                  <a class="icon">
                    <i class="fa fa-refresh"></i>
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

              <table class="table table-dic table-hover ">
                <tbody>
                  <tr style="font-weight:bold;">
                    <td>操作人</td>
                    <td>操作</td>
                    <td>操作类型</td>
                    <td>内容</td>
                    <td class="text-r">操作时间</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>丁兆才</td>
                    <td>新建</td>
                    <td>项目</td>
                    <td>湖南cpxxx</td>
                    <td class="text-r">27/2/2015 12:34:21</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <!-- End Files -->
        </div>
        <!-- End Right -->


        <!-- Start Right -->
        <div class="col-md-6">
          <h4>资源中心</h4>
          <!-- Start Files -->
          <div class="panel panel-widget" style="height:450px;">
            <div class="panel-title">
              共计
              <span class="label label-danger">{{totalEn.resourceCount}}</span>个资源。
              <ul class="panel-tools">
                <li>
                  <a class="icon">
                    <i class="fa fa-refresh"></i>
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

              <table class="table table-dic table-hover ">
                <tbody>
                  <tr style="font-weight:bold;">
                    <td>资源名</td>
                    <td>资源类型</td>
                    <td class="text-r">上传时间</td>
                  </tr>
                  <tr v-for="(entity, index) of lstLastResourceEn" v-bind:key="index">
                    <td>
                      <i class="fa fa-folder-o"></i>{{entity.resourceName}}</td>
                    <td>{{getResourceType(entity)}}</td>
                    <td class="text-r">{{entity.publishDate}}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <!-- End Files -->
        </div>
        <!-- End Right -->


      </div>




    </div>
    <!-- END CONTAINER -->
    <!-- //////////////////////////////////////////////////////////////////////////// -->


  </div>
</template>



<script>
  import ajax from "@/common/ajax";
  import common from '@/common/common.js'

  export default {
    name: 'Home',
    data() {
      return {
        totalEn: {},
        lstRunningProjectEn: [],
        lstFinishProjectEn: [],
        lstLastProjectEn: [],
        lstLastResourceEn: [],
        lstLastOperationEn: [],

        getResourceType: common.stringCommon.getResourceType,
      };
    },
    mounted() {
      this.initHome();
    },
    methods: {

      getRunningProjectList() {
        ajax.get('/restapi/project/search/findByProjectStatus', {
          projectStatus: 20
        }).then(response => {
          this.lstRunningProjectEn = response._embedded.projectEntities;
        });
      },

      getFinishProjectList() {
        ajax.get('/restapi/project/search/findByProjectStatus', {
          projectStatus: 30
        }).then(response => {
          this.lstFinishProjectEn = response._embedded.projectEntities;
        });
      },

      getLastProjectList() {
        ajax.get('/restapi/project/search/findTop4ByOrderByCreateDate').then(response => {
          this.lstLastProjectEn = response._embedded.projectEntities;
        });
      },

      getLastResourceList() {
        ajax.get('/restapi/resource/search/findTop10ByOrderByCreateDate').then(response => {
          this.lstLastResourceEn = response._embedded.resourceEntities;
        });
      },

      getLastOperationList() {

      },

      initHome() {
        ajax.get('/api/admin/home').then(response => {
          this.totalEn = response;
        });

        this.getRunningProjectList();
        this.getFinishProjectList();
        this.getLastProjectList();
        this.getLastResourceList();
        this.getLastOperationList();
      },

      getPannelColor(projectEn) {
        return "background:" + projectEn.color + "; height:205px;"
      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .textDesc {
    display: inline-block;
    height: 58px;
    width: 300px;
    line-height: 20px;
    overflow: hidden;
    font-size: 13px;
  }

  .textDesc:after {
    display: inline;
    content: "...";
    font-size: 18px;

  }

</style>
