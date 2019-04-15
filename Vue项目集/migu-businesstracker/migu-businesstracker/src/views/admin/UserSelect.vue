<template>
  <div style="width:800px;margin:10px;">

    <div class="row">

      <div class="col-md-12">
        <div class="panel panel-default">

          <div class="panel-title">
            搜索用户
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



              <div class="form-group" style="margin-bottom:5px;">
                <label for="input001" class="col-sm-2 control-label form-label">搜索用户</label>
                <div class="col-sm-10" style="width:75%">
                  <input type="text" v-model="txtKeyword" class="form-control" />
                  <span id="helpBlock" class="help-block" style="margin-bottom:0px;">输入姓名、用户名、手机、邮箱均可检索出相匹配用户，支持模糊搜索。</span>
                </div>
              </div>

              <div class="col-sm-offset-2 col-sm-10">
                <a type="submit" @click="search" class="btn btn-default">搜索</a>
              </div>
            </form>

          </div>

        </div>
      </div>

    </div>


    <!-- Start Row -->
    <div class="row">


      <!-- Start Panel -->
        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              搜索结果
            </div>

            <div class="panel-body">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <td>选择</td>
                    <td>头像</td>
                    <td>用户名</td>
                    <td>姓名</td>
                    <td>手机</td>
                    <td>邮箱</td>
                    <td>公司</td>
                    <td>部门</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <tr v-for="(entity, index) of listData" v-bind:key="index">
                    <td>
                      <div class="radio radio-danger">
                        <input type="radio" :id="'rad'+index" name="radUser" :value="entity.userId+'|'+entity.userName+'|'+entity.realName" />
                        <label :for="'rad'+index"></label>
                      </div>
                    </td>
                    <td><img style="width:50px;height:50px;border-radius:100%;" :src="entity.avatar" /></td>
                    <td>{{entity.userName}}</td>
                    <td>{{entity.realName}}</td>
                    <td>{{entity.cellphone}}</td>
                    <td>{{entity.email}}</td>
                    <td>{{entity.companyName}}</td>
                    <td>{{entity.depName}}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <!-- End Panel -->

    </div>
    <!-- End Row -->

  </div>
</template>



<script>
import ajax from "@/common/ajax";
import common from "@/common/common";

export default {
  name: "Login",
  data() {
    return {
      txtKeyword: "",
      listData: []
    };
  },
  mounted() {
    this.search();
  },

  methods: {
    search() {
      let keyword = "%" + this.txtKeyword + "%";

      ajax
        .get(
          "/restapi/adminUser/search/findByUserNameLikeOrRealNameLikeOrCellphoneLikeOrEmailLikeOrderByCreateDateDesc",
          {
            userName: keyword,
            realName: keyword,
            cellphone: keyword,
            email: keyword
          }
        )
        .then(response => {
          this.listData = response._embedded.adminUserEntities;
          this.listData.forEach(
            item => (item.avatar = urIConfig.avatarImagePrefix + item.avatar)
          );
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>