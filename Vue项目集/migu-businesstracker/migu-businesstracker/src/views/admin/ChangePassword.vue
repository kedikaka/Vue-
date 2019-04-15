<template>
 <div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">修改密码</h1>
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
                <label class="col-sm-2 control-label form-label">请输入老密码</label>
                <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control"/>
                </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">请输入新密码</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control"/>
                  </div>
              </div>

             <div class="form-group">
                  <label class="col-sm-2 control-label form-label">重复输入新密码</label>
                  <div class="col-sm-10" style="width:30%">
                      <input type="text" class="form-control"/>
                  </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>

                 <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                      <a href="javascript:void(0);" class="btn btn-square btn-default" @click="create">修改密码</a>
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
  name: 'AdminChangePassword',
  data() {
    return {
      userId: this.$route.query.userId,
      dataForm: this.getAdminUser
    };
  },
  methods: {
    getAdminUser() {
      let apiUri = "/restapi/adminUser/" + this.userId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });
    },
    changePassword(){
      let apiUri = "/api/adminUser/" + this.userId;
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>