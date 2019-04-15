<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">修改文档</h1>
      <ol class="breadcrumb">
        <li class="active">修改一个已存在的文档</li>
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
                  <label for="input002" class="col-sm-2 control-label form-label">文档标题</label>
                  <div class="col-sm-10" style="width:70%">
                    <input id="txtTitle" type="text" v-model="resourceDocData.resourceName" class="form-control form-control-line"
                      placeholder="请输入标题">
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">文档内容</label>
                  <div class="col-sm-10" style="width:70%">
                    <textarea v-model="resourceDocData.text" class="form-control" rows="8" placeholder="请输入文档描述..."></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label for="input002" class="col-sm-2 control-label form-label">优先级</label>
                  <div class="col-sm-10" style="width:5%">
                    <input id="txtTitle" type="text" v-model="resourceData.priority" class="form-control form-control-line"
                      placeholder="0">

                  </div>
                  <span id="helpBlock" class="help-block">（列表中显示顺序的优先级，数字越大优先级越高）</span>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a href="javascript:void(0);" class="btn btn-default" @click="update">修改</a>
                    <a class="btn btn-success" @click="clear">清除</a>
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
        stepList: {},
        resourceId: this.$route.query.resourceId,
        resourceData: {},
        resourceDocData: {}
      };
    },
    mounted() {
      this.getAllProject();
      this.getResource();
    },
    methods: {
      getResource: function () {
        let resourceDocApiUrl = "/restapi/resourceDoc/search/findByResourceId?resourceId=" + this.resourceId;
        var result_en = ajax.get(resourceDocApiUrl).then(response => {
          this.resourceDocData = response;
        });

        let resourceApiUrl = "/restapi/resource/" + this.resourceId;
        var result_en = ajax.get(resourceApiUrl).then(response => {
          this.resourceData = response;
        });
      },
      getAllProject: function () {
        let apiUrl = "/restapi/project";
        var result_en = ajax.get(apiUrl).then(response => {
          this.projectList = response._embedded.projectEntities;

          if (this.projectList.length != 0) {
            this.projectSelected = this.projectList[0].projectId;
            this.changeProject();
          }
        });
      },
      changeProject: function () {
        let projectId = this.projectSelected;
        let apiUrl =
          "/restapi/process/search/findByProjectId?projectId=" + projectId;
        var result_en = ajax.get(apiUrl).then(response => {
          this.processList = response._embedded.processEntities;
          this.changeProcess();
        });
      },
      changeProcess: function () {
        let processId = this.processSelected;
        let apiUrl =
          "/restapi/step/search/findByProcessId?processId=" + processId;
        var result_en = ajax.get(apiUrl).then(response => {
          this.stepList = response._embedded.stepEntities;
        });
      },
      clear() {
        this.txtTitle = "";
        this.txaContent = "";
        this.txtPriority = 0;
      },

      updateResourceDoc() {

        var paramData = {};
        paramData["docName"] = this.resourceDocData.resourceName;
        paramData["text"] = this.resourceDocData.resourceName;
        paramData["resourceName"] = this.resourceDocData.resourceName;

        let apiUrl = "/restapi/resourceDoc/" + this.resourceDocData.docId;
        ajax.patch(apiUrl, paramData).then(response => {
          alert('doc资源修改成功');
        });
      },

      update() {

        var paramData = {};
        paramData["resourceName"] = this.resourceDocData.resourceName;
        paramData["priority"] = this.resourceData.priority;

        let apiUrl = "/restapi/resource/" + this.resourceId;
        ajax.patch(apiUrl, paramData).then(response => {
          this.updateResourceDoc();
        });

        // param_data["publishUserId"] = Cookies.get("loginUser");

        // param_data["projectId"] = this.projectSelected;
        // param_data["processId"] = this.processSelected;
        // param_data["stepId"] = this.stepSelected;

        // param_data["resourceDesc"] = this.txaContent;

        // let apiUrl = "/api/resource/resource";
        // var result_en = ajax.patch(apiUrl, param_data).then(response => {
        //   alert("文档新增成功");
        // });

      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
