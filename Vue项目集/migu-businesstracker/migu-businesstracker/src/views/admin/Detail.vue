<template>
 <div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">新建用户</h1>
    <ol class="breadcrumb">
      <li class="active">查看用户详情用户</li>
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
                  <label class="col-sm-2 control-label form-label">用户状态</label>
                  <div class="col-sm-10" style="width:30%">
                      <div v-html="getAdminUserStatusHtml(dataForm.status)"></div>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>

                  <div ref="btnChangeAdminUserHtml" @click="changeAdminUserStatus()" v-html="getStatusButtonHtml(dataForm.status)">
                    
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
  name: "adminDetail",
  
  data() {
    return {
      userId: this.$route.query.userId,
      dataForm: this.getAdminUser
    };
  },
  mounted() {
    this.getAdminUser();
  },
  methods: {
    getAdminUserStatusHtml(status) {
      switch (status) {
        case 0:
          return '<span class="btn-xs btn-rounded btn-option1">待审批</span>';
        case 1:
          return '<span class="btn-xs btn-rounded btn-success">有效</span>';
        case 2:
          return '<span class="btn-xs btn-rounded btn-option3">无效</span>';
        default:
          return '<span class="btn-xs btn-rounded btn-option4">未知' + status + "</span>";
      }
    },
    getStatusButtonHtml(status){

      switch (status) {
        case 0:
          return '<a href="javascript:void(0);" status="1" class="btn btn-square btn-default" >审批通过</a>';
        case 1:
          return '<a href="javascript:void(0);" status="2" class="btn btn-square btn-default" >注销用户</a>';
        case 2:
          return '<a href="javascript:void(0);" status="1" class="btn btn-square btn-default" >置为有效</a>';
        default:
          return '<a href="javascript:void(0);" status="1" class="bb btn btn-square btn-default" >置为有效</a>';
      }
      
    },
    getAdminUser() {
      let apiUri = "/restapi/adminUser/" + this.userId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });

    },
    changeAdminUserStatus(){

      let status = this.$refs.btnChangeAdminUserHtml.firstChild.getAttribute('status');
      let param_data = {
        status: status
      };

      let apiUri = "/restapi/adminUser/" + this.userId;
      ajax.patch(apiUri, param_data).then(response => {
        alert('更改状态成功');
        location.reload();
      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>