<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">修改项目</h1>
      <ol class="breadcrumb">
        <li class="active">创建一个项目信息</li>
      </ol>
    </div>
    <!-- End Page Header -->
    <div class="container-padding">
      <!-- Start Row -->
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-title">请填下以下信息
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
                    <input type="text" class="form-control" v-model="dataForm.projectName">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">项目描述</label>
                  <div class="col-sm-10" style="width:50%">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="请输入项目描述..."
                      v-model="dataForm.projectDesc"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label for="exampleInputAmount2" class="col-sm-2 control-label form-label">项目负责人</label>
                  <div class="col-sm-10" style="width:50%">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-user"></i>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="请输入项目负责人的用户名"
                        v-model="dataForm.manageUserName"
                      >
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-square btn-default"
                      @click="update"
                    >修改</a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-square btn-success"
                      @click="$router.go(-1)"
                    >返回</a>
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
  name: "projectUpdate",
  data() {
    return {
      projectId: this.$route.query.projectId,
      dataForm: this.getProject
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    verifyDate() {
      if (!this.dataForm.projectName) {
        return "项目名称不允许为空";
      }
    },

    getProject() {
      let apiUri = "/restapi/project/" + this.projectId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });
    },

    update() {
      var error_msg = this.verifyDate();
      if (error_msg) {
        alert(error_msg);
        return false;
      }

      var paramData = {};
      paramData['projectId'] = this.projectId;
      paramData['projectName'] = this.dataForm.projectName;
      paramData['projectDesc'] = this.dataForm.projectDesc;
      paramData['manageRealName'] = this.dataForm.manageRealName;
      paramData['priority'] = this.dataForm.priority;

      let apiUri = "/api/project/project";
      var result_en = ajax.patch(apiUri, paramData).then(response => {
        layer.msg("修改项目成功");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
