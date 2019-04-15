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
                <label for="input002" class="col-sm-2 control-label form-label">流程名称</label>
                <div class="col-sm-10" style="width:50%">
                  <input type="text" class="form-control"  v-model="dataForm.processName" />
                </div>
              </div>

              <div class="form-group">
                  <label class="col-sm-2 control-label form-label">流程描述</label>
                  <div class="col-sm-10"  style="width:50%">
                      <textarea class="form-control" rows="5"  placeholder="请输入流程描述..." v-model="dataForm.processDesc"></textarea>
                  </div>
              </div>

              <div class="form-group">
                  <label for="exampleInputAmount2" class="col-sm-2 control-label form-label">流程负责人</label>
                  <div class="col-sm-10" style="width:50%">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="fa fa-user"></i></div>
                      <input type="text" class="form-control" placeholder="请输入流程负责人的用户名" v-model="dataForm.manageUserName" />
                    </div>
                  </div>
                </div>


              <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                      <!-- <a href="javascript:void(0);" class="btn btn-square btn-default" @click="create">新增</a> -->
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
  name: "processCreate",
  data() {
    return {
      processId: this.$route.query.processId,
      dataForm: this.getProcess
    };
  },
  mounted(){
    this.getProcess();
  },
  methods: {
    
    getProcess() {
      let apiUri = "/restapi/process/" + this.processId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });

    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>