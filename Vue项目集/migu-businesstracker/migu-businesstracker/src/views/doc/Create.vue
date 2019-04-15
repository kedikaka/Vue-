<template>
<div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">新建文档</h1>
    <ol class="breadcrumb">
      <li class="active">创建一个全新的文档，文档至少要从属于一个项目，也可从属于对应的流程、步骤</li>
    </ol>



  </div>
  <!-- End Page Header -->


  <div class="container-padding">



    <!-- Start Row -->
    <div class="row">

      <div class="col-md-12">
        <div class="panel panel-default">

          <div class="panel-title">
            请填写
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
                <label for="input002" style="font-weight: bold;" class="col-sm-2 control-label form-label">从属</label>
                <div class="col-sm-10" style="width:70%">
                 <select class="form-control" v-model="projectSelected" @change="changeProject" style="width: 33%;display: inline;">
                    <option v-for="item in projectList" :value="item.projectId" :key="item.projectId" >
                        {{item.projectName}}
                    </option>
                 </select>
                 <select class="form-control" v-model="processSelected" @change="changeProcess" style="width: 33%;display: inline;">
                      <option v-for="item in processList" :value="item.processId" :key="item.processId" >
                        {{item.processName}}
                    </option>
                 </select>
                 <select class="form-control" v-model="stepSelected"  style="width: 33%;display: inline;">
                    <option v-for="item in stepList" :value="item.processId" :key="item.processId">
                          {{item.stepName}}
                    </option>
                 </select>
                </div>
              </div>

              <div class="form-group">
                <hr/>
              </div>

              <div class="form-group">
                <label for="input002" class="col-sm-2 control-label form-label">文档标题</label>
                <div class="col-sm-10" style="width:70%">
                    <input type="text" v-model="txtTitle" class="form-control form-control-line" placeholder="请输入标题">
                  </div>
              </div>
              

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">文档内容</label>
                  <div class="col-sm-10"  style="width:70%">
                      <textarea v-model="txaContent" class="form-control" rows="8"  placeholder="请输入文档描述..."></textarea>
                  </div>
              </div>
              
              <div class="form-group">
                <label for="input002" class="col-sm-2 control-label form-label">优先级</label>
                <div class="col-sm-10" style="width:5%">
                    <input type="text" v-model="txtPriority" class="form-control form-control-line" placeholder="0">
                    
                  </div>
                  <span id="helpBlock" class="help-block">（列表中显示顺序的优先级，数字越大优先级越高）</span>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                      <a href="javascript:void(0);" class="btn btn-default" @click="create">新增</a>
                      <a  class="btn btn-success" @click="clear">清除</a>
                  </div>
              </div>

            </form>

          </div>

        </div>
      </div>

    </div>
    <!-- End Row -->

  </div>
  </div>
</template>



<script>
import common from "@/common/common";
import ajax from "@/common/ajax";

export default {
  name: "docCreate",
  data() {
    return {
      projectSelected: "",
      processSelected: "",
      stepSelected: "",
      txtTitle: "",
      txaContent: "",
      txtPriority: 0,
      projectList: {},
      processList: {},
      stepList: {}
    };
  },
  mounted() {
    this.getAllProject();
  },
  methods: {
    getAllProject: function() {
      let apiUrl = "/restapi/project";
      var result_en = ajax.get(apiUrl).then(response => {
        this.projectList = response._embedded.projectEntities;

        if (this.projectList.length != 0) {
          this.projectSelected = this.projectList[0].projectId;
          this.changeProject();
        }
      });
    },
    changeProject: function() {
      let projectId = this.projectSelected;
      let apiUrl =
        "/restapi/process/search/findByProjectId?projectId=" + projectId;
      var result_en = ajax.get(apiUrl).then(response => {
        this.processList = response._embedded.processEntities;
        this.changeProcess();
      });
    },
    changeProcess: function() {
      let processId = this.processSelected;
      let apiUrl =
        "/restapi/step/search/findByProcessId?processId=" + processId;
      var result_en = ajax.get(apiUrl).then(response => {
        this.stepList = response._embedded.stepEntities;
      });
    },
    clear(){
      this.txtTitle = '';
      this.txaContent = '';
      this.txtPriority = 0;
    },
    create() {
      var param_data = {};
      param_data["resourceName"] = this.txtTitle;
      param_data["resourceDesc"] = this.txaContent;
      param_data["resourceType"] = 1;
      param_data["priority"] = this.txtPriority;
      param_data["publishUserId"] = Cookies.get("loginUser");

      param_data['projectId'] = this.projectSelected;
      param_data['processId'] = this.processSelected
      param_data['stepId'] = this.stepSelected;

      let apiUrl = "/api/resource/resource";
      var result_en = ajax
        .post(apiUrl, param_data)
        .then(response => {
          alert("文档新增成功");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>