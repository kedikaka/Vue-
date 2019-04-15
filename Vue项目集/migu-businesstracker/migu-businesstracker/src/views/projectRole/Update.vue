<template>
<div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">角色修改</h1>
    <ol class="breadcrumb">
      <li class="active">修改角色信息</li>
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
                <label for="input002" class="col-sm-2 control-label form-label">角色名称</label>
                <div class="col-sm-10" style="width:50%">
                  <input type="text" class="form-control"  v-model="dataForm.roleName" />
                </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">角色描述</label>
                  <div class="col-sm-10"  style="width:50%">
                      <textarea class="form-control" rows="5"  placeholder="请输入描述..." v-model="dataForm.roleDesc"></textarea>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                      <a href="javascript:void(0);" class="btn btn-square btn-default" @click="update">修改</a>
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
  name: "projectRoleUpdate",
  data() {
    return {
      roleId: this.$route.query.roleId,
      dataForm: {}
    };
  },
  mounted(){
    this.getProjectRole();
  },
  methods: {
    verifyDate(){
        if(!this.dataForm.roleName){
            return '名称不允许为空';
        }
    },

    getProjectRole() {
      let apiUri = "/restapi/projectRole/" + this.roleId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });

    },

    update(){
      var error_msg = this.verifyDate();
        if(error_msg){
            alert(error_msg);
            return false;
      }
      var param_data = {};
      param_data['roleName'] = this.dataForm.roleName;
      param_data['roleDesc'] = this.dataForm.roleDesc;
                            
      let apiUri = "/restapi/projectRole/" + this.roleId;
      var result_en = ajax.patch(apiUri, param_data)
      .then(response=>{
          alert('修改成功');
          this.$router.push({
            path: '/projectRole/list'
          });
      });
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>