<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">新建用户</h1>
      <ol class="breadcrumb">
        <li class="active">创建一个全新的用户</li>
      </ol>



    </div>
    <!-- End Page Header -->


    <div class="container-padding">



      <!-- Start Row -->
      <div class="row">

        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              请填下以下信息
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
                  <label for="input002" class="col-sm-2 control-label form-label">项目名称</label>
                  <div class="col-sm-10" style="width:50%">
                    <input type="text" class="form-control" v-model="dataForm.projectName" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">项目描述</label>
                  <div class="col-sm-10" style="width:50%">
                    <textarea class="form-control" rows="5" placeholder="请输入项目描述..." v-model="dataForm.projectDesc"></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label for="exampleInputAmount2" class="col-sm-2 control-label form-label">项目负责人</label>
                  <div class="col-sm-10" style="width:50%">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="fa fa-user"></i></div>
                      <input type="text" class="form-control" placeholder="请输入项目负责人的用户名" v-model="dataForm.manageUserName" />
                    </div>
                  </div>
                </div>


                <div class="form-group">
                  <label for="input002" class="col-sm-2 control-label form-label">优先级</label>
                  <div class="col-sm-10" style="width:50%">
                    <input type="text" class="form-control" v-model="dataForm.priority" />
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a href="javascript:void(0);" class="btn btn-square btn-default" @click="create">新增</a>
                    <a href="javascript:void(0);" class="btn btn-square btn-success" @click="createCP">新增CP对接项目</a>
                    <span id="helpBlock" style="color:#b5aeae;" class="help-block">（【新增CP对接项目】指以CP对接的标准流程、步骤为模板的创建项目）</span>
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
    name: "projectCreate",
    data() {
      return {
        dataForm: {
          'projectName': '',
          'projectDesc': '',
          'manageUserName': '',
          'priority': 0
        }
      };
    },
    methods: {
      verifyDate() {
        if (!this.dataForm.projectName) {
          return '项目名称不允许为空';
        }
      },

      create() {
        let paramData = {};
        paramData['projectName'] = this.dataForm.projectName;
        paramData['projectDesc'] = this.dataForm.projectDesc;
        paramData['manageUserName'] = this.dataForm.manageUserName;
        paramData['priority'] = this.dataForm.priority;

        ajax
          .post("/api/project/project", paramData)
          .then(response => {
            alert("新增项目成功");
          });
      },
      createCP() {
        var param_data = this.dataForm;
        param_data.createUser = common.config.systemName + ' projectCreate';

        var result_en = ajax
          .post("/api/project/CPproject", param_data)
          .then(response => {
            alert("新增CP项目成功");
          });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
