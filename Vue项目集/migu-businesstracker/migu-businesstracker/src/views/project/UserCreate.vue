<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">新建项目成员</h1>
      <ol class="breadcrumb">
        <li class="active">添加新的成员进入项目</li>
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
                  <label for="input002" style="font-weight: bold;" class="col-sm-2 control-label form-label">角色选择</label>
                  <div class="col-sm-10" style="width:70%">
                    <select class="form-control" v-model="projectRoleSelected" style="width: 33%;display: inline;">
                      <option v-for="item in lstProjectRole" :value="item.roleId" :key="item.projectRoleId">
                        {{item.roleName}}
                      </option>
                    </select>

                  </div>
                </div>


                <div class="form-group">
                  <label for="exampleInputAmount2" class="col-sm-2 control-label form-label">成员</label>
                  <div class="col-sm-10" style="width:24%">
                      <input type="text" class="form-control" v-model="txtUserId" placeholder="可输入用户名、真实姓名、手机或email" />

                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">备注</label>
                  <div class="col-sm-10" style="width:50%">
                    <textarea v-model="txaRemark" class="form-control" rows="5"></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a href="javascript:void(0);" class="btn btn-square btn-default" @click="create">新增</a>

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
        projectId: this.$route.query.projectId,
        txtUserId: '',
        txaRemark: '',
        projectRoleSelected: 1,
        lstProjectRole: {}
      };
    },
    mounted() {
      this.getProjectRole();
    },
    methods: {
      getProjectRole() {
        ajax
          .get("/restapi/projectRole")
          .then(response => {
            this.lstProjectRole = response._embedded.projectRoleEntities;
          });
      },
      create() {
        var param_data = {};
        param_data['projectId'] = this.projectId;
        param_data['userId'] = this.txtUserId;
        param_data['roleId'] = this.projectRoleSelected;
        param_data['remark'] = this.txaRemark;
        

        var result_en = ajax
          .post("/api/project/projectUserRelation", param_data)
          .then(response => {
            alert("新增成员成功");
        });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
