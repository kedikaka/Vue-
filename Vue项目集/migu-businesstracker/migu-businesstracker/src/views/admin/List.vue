<template>
  <div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">通讯录清单</h1>
    <ol class="breadcrumb">
      <li class="active">查看所有的联系人</li>
    </ol>



  </div>
  <!-- End Page Header -->


  <div class="container-padding">

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



              <div class="form-group">
                <label for="input001" class="col-sm-2 control-label form-label">搜索用户</label>
                <div class="col-sm-10" style="width:30%">
                  <input type="text" v-model="txtKeyword" class="form-control" id="input001" />
                  <span id="helpBlock" class="help-block">输入姓名或用户名即可检索出相匹配用户，支持模糊搜索。</span>
                </div>
              </div>

              <div class="col-sm-offset-2 col-sm-10">
                <a type="submit" @click="search" class="btn btn-default">搜索</a>
                <router-link :to="{ path: '/admin/create'}" class="btn btn-success">新建用户</router-link>
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
            用户清单
          </div>

          <div class="panel-body">

            <table class="table">
              <thead>
                <tr>
                  <td>用户名</td>
                  <td>姓名</td>
                  <td>手机</td>
                  <td>邮箱</td>
                  <td>公司</td>
                  <td>部门</td>
                  <td>状态</td>
                  <td>创建时间</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                <tr  v-for="(entity, index) of listData" v-bind:key="index" :class="getAlternateClass(index)" >
                  <td>
                    <b>{{entity.userName}}</b>
                  </td>
                  <td>{{entity.realName}}</td>
                  <td>{{entity.cellphone}}</td>
                  <td>{{entity.email}}</td>
                  <td>{{entity.companyName}}</td>
                  <td>{{entity.depName}}</td>
                  <td>
                    <div v-html="getAdminUserStatusHtml(entity.status)"></div>
                  </td>
                  <td>{{entity.createDate}}</td>
                  <td>
                      <router-link :to="{ path: '/admin/update', query:{ userId: entity.userId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                      <router-link :to="{ path: '/admin/detail', query:{ userId: entity.userId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>
                    </td>
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
  </div>
</template>



<script>
import ajax from "@/common/ajax";
import common from "@/common/common";



export default {
  name: "Login",
  data() {
    return {
      txtKeyword: '',
      listData: this.search,
    };
  },
  mounted() {
    this.search();
  },

  methods: {
    getAlternateClass: function(index){
      let flag = common.function.checkOdevity(index);
      return flag ? 'info' : 'active';
    },
    getAdminUserStatusHtml(status){
      switch(status){
        case 0:
          return '<span class="btn-xs btn-default btn-option1">待审批</span>';
        case 1:
          return '<span class="btn-xs btn-default btn-success">有效</span>';
        case 2:
          return '<span class="btn-xs btn-default btn-option3">无效</span>';
        default:
          return '<span class="btn-xs btn-default btn-option4">未知' + status + '</span>';
      }
    },
    search() {
      
      let keyword = '%' + this.txtKeyword + '%';
      
      ajax
        .get("/restapi/adminUser/search/findByUserNameLikeOrRealNameLikeOrCellphoneLikeOrEmailLikeOrderByCreateDateDesc",
        {
          userName: keyword,
          realName: keyword,
          cellphone: keyword,
          email: keyword
        })
        .then(response => {
          console.log(response);
          this.listData = response._embedded.adminUserEntities;
          console.log(this.listData);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>