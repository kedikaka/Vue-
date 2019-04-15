<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">资源列表</h1>



      <ol class="breadcrumb">
        <li class="active">查看选定范围的资源</li>
      </ol>

      <span style="text-align:center;">
        <h1>项目【业务跟踪系统】- 流程【原型设计】- 步骤【服务器调研】</h1>
      </span>

    </div>
    <!-- End Page Header -->


    <div class="container-padding">
      <!-- Start Row -->
      <div class="row">



        <!-- Start Files -->
        <div class="col-md-6 col-lg-12">
          <div class="panel panel-widget">
            <div class="panel-title">
              资源列表 <span class="label label-danger">29</span>
              <ul class="panel-tools">
                <li><a class="icon"><i class="fa fa-refresh"></i></a></li>
                <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
              </ul>
            </div>
            <div class="panel-body table-responsive">

              <table class="table table-dic table-hover ">
                <tbody>
                  <tr>
                    <td>资源名称</td>
                    <td>资源类型</td>
                    <td>文件扩展名</td>
                    <td class="text-r">发布时间</td>
                    <td>发布人</td>
                    <td>操作</td>
                  </tr>
                  <tr v-for="(entity, index) of listData" v-bind:key="index">
                    <td><i class="fa fa-file-archive-o"></i><b>{{entity.resourceName}}</b></td>
                    <td>
                      <div v-html="getResourceTypeHtml(entity.resourceType)"></div>
                    </td>
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
        <!-- End Files -->

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
      bindEvent: function () {
        $(".btnDropdownMenu").bind("click", function () {
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
      getResourceTypeHtml(resourceType) {
        switch (resourceType) {
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
