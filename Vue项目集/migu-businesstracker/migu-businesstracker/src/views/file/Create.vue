<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">添加文件</h1>
      <ol class="breadcrumb">
        <li class="active">选择一个文件上传</li>
      </ol>



    </div>
    <!-- End Page Header -->


    <div class="container-padding">



      <!-- Start Row -->
      <div class="row">

        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              请选择项目从属
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
                      <option v-for="item in projectList" :value="item.projectId" :key="item.projectId">
                        {{item.projectName}}
                      </option>
                    </select>
                    <select class="form-control" v-model="processSelected" @change="changeProcess" style="width: 33%;display: inline;">
                      <option v-for="item in processList" :value="item.processId" :key="item.processId">
                        {{item.processName}}
                      </option>
                    </select>
                    <select class="form-control" v-model="stepSelected" style="width: 33%;display: inline;">
                      <option v-for="item in stepList" :value="item.stepId" :key="item.stepId">
                        {{item.stepName}}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <hr />
                </div>


                <div class="form-group">
                  <label for="input002" class="col-sm-2 control-label form-label">选择文件</label>
                  <div class="col-sm-10" style="width:70%">
                    <input ref="fileData" style="padding:5px 10px 5px 10px;width:100%;" type="file" class="dropify" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="input002" class="col-sm-2 control-label form-label">优先级</label>
                  <div class="col-sm-10" style="width:5%">
                    <input type="text" v-model="txtPriority" class="form-control form-control-line"
                      placeholder="0">

                  </div>
                  <span id="helpBlock" class="help-block">（列表中显示顺序的优先级，数字越大优先级越高）</span>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a href="javascript:void(0);" class="btn btn-default" @click="upload()">新增</a>
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
      upload(item) {

        if (this.$refs.fileData.length == 0) {
          alert('请选择一个文件！');
        }

        let param_data = new FormData();
        param_data.append('projectId', this.projectSelected);
        param_data.append('processId', this.processSelected);
        param_data.append('stepId', this.stepSelected);

        param_data.append('priority', this.txtPriority);
        // param_data.append('publishUserId', Cookies.get("loginUser"));
        param_data.append('publishUserId', '933f85a240b0426d890f8f4197d0c4ce');
        param_data.append('resourceType', 4);

        let file = this.$refs.fileData.files[0];
        param_data.append('file', file);


        console.log(param_data);

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata
          }
        };

        let apiUrl = "/api/resource/resourceFile";
        var result_en = ajax
          .file_post(apiUrl, param_data)
          .then(response => {
            alert("文件上传成功");
            // console.log(param_data.get('file'));
          });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
