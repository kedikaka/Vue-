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
                <label for="input002" class="col-sm-2 control-label form-label">用户名</label>
                <div class="col-sm-10" style="width:30%">
                  <input type="text" class="form-control"  v-model="dataForm.userName" />
                  <span id="helpBlock" class="help-block">即用户系统登录名，建议英文字母和数字</span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label form-label">姓名</label>
                <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.realName"/>
                </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">手机</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control" v-model="dataForm.cellphone"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">邮箱</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control"  v-model="dataForm.email"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">公司</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control"  v-model="dataForm.companyName"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">部门</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control" v-model="dataForm.depName"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">微信</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control" v-model="dataForm.wx"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">QQ</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control" v-model="dataForm.qq"/>
                  </div>
              </div>
              

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">头像</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control" v-model="dataForm.avatar"/>
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
import ajax from "@/common/ajax";

export default {
  name: "Login",
  data() {
    return {
      dataForm: {
        userName: "",
        realName: "",
        cellphone: "",
        email: "",
        companyName: "",
        depName: "",
        wx: "",
        qq: "",
        avatar: ""
      }
    };
  },
  methods: {
    verifyDate() {
      if (!this.dataForm.userName) {
        return "用户名不允许为空";
      }
    },
    create() {
      var error_msg = this.verifyDate();
      if (error_msg) {
        alert(error_msg);
        return false;
      }

      var param_data = this.dataForm;

      // /api/admin/register
      var result_en = ajax
        .post("/api/admin/adminUser", param_data)
        .then(response => {
          alert("新增用户成功");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>