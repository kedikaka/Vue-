<template>
  <div class="content">
      <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">资源列表</h1>
    <ol class="breadcrumb">
      <li class="active">查看所有的资源</li>
    </ol>



  </div>
  <!-- End Page Header -->


  <div class="container-padding">

    <div class="row">

      <div class="col-md-12">
        <div class="panel panel-default">

          <div class="panel-title">
            搜索资源
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
                <label for="input001" class="col-sm-3 control-label form-label">搜索资源</label>
                <div class="col-sm-10" style="width:30%">
                  <input type="text" class="form-control" v-model="txtKeyword"/>
                  <span id="helpBlock" class="help-block">输入资源标题，支持模糊搜索。</span>
                </div>
              </div>

              <div class="form-group">
                <label for="input001" class="col-sm-3 control-label form-label">资源类型</label>
                <div class="col-sm-10" style="width:30%">
                 <select class="form-control" v-model="sslResourceType">
                      <option value="0">所有</option>
                      <option value="1">文档</option>
                      <option value="2">markdown文档</option>
                      <option value="3">图片</option>
                      <option value="4">文件</option>
                 </select>
                </div>
              </div>

              <div class="col-sm-offset-3 col-sm-10">
                <a type="submit" @click="search" class="btn btn-default">搜索</a>
                <div class="dropdown btnDropdownMenu" style="display:inline;">
                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false">
                      创建资源
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu ulButtonDropdownMenu" role="menu" aria-labelledby="dropdownMenu1">
                      <li role="presentation">
                        <router-link :to="{ path: '/doc/create'}">在线文档</router-link>
                        </li>
                      <li role="presentation">
                        <router-link :to="{ path: '/markdown/create'}" >markdown</router-link>
                      </li>
                      <li role="presentation">
                        <router-link :to="{ path: '/image/create'}" >图片</router-link>
                        </li>
                      <li role="presentation">
                        <router-link :to="{ path: '/file/create'}" >文件</router-link>
                        </li>
                    </ul>
                </div>
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
                <td>资源名称</td>
                <td>资源类型</td>
                <td>文件扩展名</td>
                <td>发布时间</td>
                <td>发布人</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr>
              <tr  v-for="(entity, index) of listData" v-bind:key="index" >
                <td><b>{{entity.resourceName}}</b></td>
                <td><div v-html="getResourceTypeHtml(entity.resourceType)"></div></td>
                <td>{{entity.fileExt}}</td>
                <td>{{entity.publishDate}}</td>
                <td>{{entity.publishUserName}}</td>
                <td>
                  <div v-if="entity.resourceType === 1">
                    <router-link :to="{ path: '/doc/update', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                    <router-link :to="{ path: '/doc/detail', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>  
                  </div>
                  <div v-else-if="entity.resourceType === 2">
                    <router-link :to="{ path: '/md/update', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-default">修改</router-link>
                    <router-link :to="{ path: '/md/detail', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>  
                  </div>
                  <div v-else-if="entity.resourceType === 3">
                    <router-link :to="{ path: '/image/detail', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>  
                  </div>
                  <div v-else-if="entity.resourceType === 4">
                    <router-link :to="{ path: '/file/detail', query:{ resourceId: entity.resourceId}}" class="btn-xs btn-rounded btn-option3">详情</router-link>  
                  </div>
                  <div v-else>
                    N/A
                  </div>



                  
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
      txtKeyword: "",
      sslResourceType: 0,
      //表格显示内容
      listData: this.search
    };
  },
  mounted() {
    this.bindEvent();
    this.search();
  },

  methods: {
    bindEvent: function() {
      $(".btnDropdownMenu").bind("click", function() {
        if ($(".ulButtonDropdownMenu").is(":hidden")) {
          $(".ulButtonDropdownMenu").show();
        } else {
          $(".ulButtonDropdownMenu").hide();
        }
      });
    },
    search() {
      ajax
        .get("/api/resource/resource", {
            keyword: this.txtKeyword,
            resourceType: this.sslResourceType
        })
        .then(response => {
          console.log(response);
          this.listData = response.content;
          console.log(this.listData);
        });
    },
    getResourceTypeHtml(resourceType){
      switch(resourceType){
        case 1:
          return '文档';
        case 2:
          return 'markdown文档';
        case 3:
          return '图片';
        case 4:
          return '文件';
        default:
          return '<span class="btn-xs btn-default btn-option4">未知' + status + '</span>';
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>