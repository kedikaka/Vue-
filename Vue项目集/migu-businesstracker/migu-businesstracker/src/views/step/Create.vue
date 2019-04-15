<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">新建步骤</h1>
      <ol class="breadcrumb">
        <li class="active">创建一个全新的步骤</li>
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
                  <label for="input002" class="col-sm-2 control-label form-label">步骤名称</label>
                  <div class="col-sm-10" style="width:50%">
                    <input type="text" class="form-control" v-model="dataForm.stepName" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">步骤描述</label>
                  <div class="col-sm-10" style="width:50%">
                    <textarea class="form-control" rows="5" placeholder="请输入步骤描述..." v-model="dataForm.stepDesc"></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label for="input002" class="col-sm-2 control-label form-label">负责人</label>
                  <div class="col-sm-10" style="width:50%">
                    <input type="text" class="form-control" placeholder="可以输入用户名、姓名、手机号或邮箱" v-model="dataForm.manageUserName" />
                    <span style="color:#b5aeae;" class="help-block">（可以为空，表示暂不分配负责人）</span>
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
                    <a href="javascript:void(0);" class="btn btn-square btn-success" @click="$router.go(-1)">返回</a>
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
    name: "stepCreate",
    data() {
      return {
        processId: this.$route.query.processId,
        dataForm: {
          'stepName': '',
          'stepDesc': '',
          'manageUserName': '',
          'priority': 0
        }
      };
    },
    methods: {
      verifyDate() {
        if (!this.dataForm.stepName) {
          return '步骤名称不允许为空';
        };

        return null;
      },
      create() {

        let errMsg = this.verifyDate();
        if(errMsg != null){
          alert(errMsg);
          return false;
        }

        let paramData = {};
        paramData['stepName'] = this.dataForm.stepName;
        paramData['stepDesc'] = this.dataForm.stepDesc;
        paramData['manageUserName'] = this.dataForm.manageUserName;
        paramData['priority'] = this.dataForm.priority;
        paramData['processId'] = this.processId;

        ajax.post("/api/step/step", paramData)
          .then(response => {
            alert("新增步骤成功");
          });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
