<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">修改联系人</h1>
      <ol class="breadcrumb">
        <li class="active">修改一个联系人</li>
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
                    <input type="text" class="form-control" v-model="dataForm.userName" />
                    <span id="helpBlock" class="help-block">即用户系统登录名，建议英文字母和数字</span>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">姓名</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.realName" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">手机</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.cellphone" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">邮箱</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.email" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">公司</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.companyName" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">部门</label>
                  <div class="col-sm-10" style="width:30%">
                    <input type="text" class="form-control" v-model="dataForm.depName" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">头像</label>
                  <div class="col-sm-10" style="width:25%">
                    <input type="text" class="form-control" v-model="dataForm.avatar" />
                  </div>
                  <a href="javascript:void(0);" @click="openAvatar" class="btn-sm btn-rounded btn-default">点击选择</a>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a href="javascript:void(0);" class="btn btn-square btn-success" @click="update">修改</a>
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
      dataForm: {},
      userId: this.$route.query.userId,
      password: ""
    };
  },
  mounted() {
    this.getAdminUser();
  },
  methods: {
    openAvatar: function(stepEn) {
      let url = "/#/admin/Avatar";
      let self_dataForm = this.dataForm;
      layer.open({
        type: 2,
        title: "头像选择",
        btn: ["选择"],
        maxmin: false,
        shadeClose: true, //点击遮罩关闭层
        area: ["690px", "676px"],
        content: url,
        yes: function(index, layero) {
          let body = layer.getChildFrame("body", index);
          let avatar = $(body)
            .find('input:radio[name="radAvatar"]:checked')
            .val();
          this.avatar = avatar;
          self_dataForm["avatar"] = avatar;
          layer.close(index);
        }
      });
    },

    getAdminUser() {
      let apiUri = "/restapi/adminUser/" + this.userId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataForm = response;
      });
    },
    update() {
      // var param_data = this.dataForm;
      var param_data = {};
      param_data["userName"] = this.dataForm.userName;
      param_data["realName"] = this.dataForm.realName;
      param_data["cellphone"] = this.dataForm.cellphone;
      param_data["email"] = this.dataForm.email;
      param_data["companyName"] = this.dataForm.companyName;
      param_data["depName"] = this.dataForm.depName;
      param_data["avatar"] = this.dataForm.avatar;

      let apiUri = "/restapi/adminUser/" + this.userId;
      ajax.patch(apiUri, param_data).then(response => {
        alert("修改成功");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
