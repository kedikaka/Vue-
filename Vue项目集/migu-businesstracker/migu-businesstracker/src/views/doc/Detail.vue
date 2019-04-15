<template>
<div class="content">
      <!-- Start Page Header -->
<div class="page-header">
    <h1 class="title">在线文档</h1>
      <ol class="breadcrumb">
        <li><a href="index.html">业务追踪平台</a></li>
        <li><a href="index.html">需求调研</a></li>
        <li class="active"><a href="index.html">服务器部署调研</a></li>
      </ol>

    <!-- Start Page Header Right Div -->
    <div class="right">
      <div class="btn-group" role="group" aria-label="...">
        <a href="index.html" class="btn btn-light">Dashboard</a>
        <a href="#" class="btn btn-light"><i class="fa fa-refresh"></i></a>
        <a href="#" class="btn btn-light"><i class="fa fa-search"></i></a>
        <a href="#" class="btn btn-light" id="topstats"><i class="fa fa-line-chart"></i></a>
      </div>
    </div>
    <!-- End Page Header Right Div -->

  </div>
  <!-- End Page Header -->


  <div class="row presentation" style="padding:25px 50px;">

    <div class="col-lg-8 col-md-6 titles">
      <div class="icon color7-bg" style="display:inline;"><i class="fa fa-file-o"></i></div>
      <h1>{{dataDocForm.docName}}</h1>
    </div>

    <div class="col-lg-4 col-md-6">
      <ul class="list-unstyled list">
        <li><i class="fa fa-user"></i>{{dataResourceForm.publishUserName}}</li><li>
        </li><li><i class="fa fa-calendar"></i>{{dataResourceForm.publishDate}}发布</li><li>
      </li></ul>
    </div>

  </div>


  <div class="container-padding">

  

  
  <!-- Start Row -->
  <div class="row">

    <div class="col-md-12">
      <div class="panel panel-default">

       
            <div class="panel-body">

            

              <div class="col-md-8 padding-0">
                <h4>{{dataDocForm.docName}}</h4>
                {{dataDocForm.text}}
              </div>

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
      resourceId: this.$route.query.resourceId,
      dataResourceForm: {},
      dataDocForm: {}
    };
  },
  mounted(){
    this.InitResouece();
    this.InitDoc();
  },
  methods: {
    InitResouece(){
      let apiUri = "/restapi/resource/" + this.resourceId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataResourceForm = response;
      });
    },
    InitDoc() {
      let apiUri = "/restapi/resourceDoc/search/findByResourceId?resourceId=" + this.resourceId;
      var result_en = ajax.get(apiUri).then(response => {
        this.dataDocForm = response;
      });

    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>