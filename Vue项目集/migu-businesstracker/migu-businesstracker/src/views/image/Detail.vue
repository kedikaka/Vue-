<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">图片详情</h1>
      <ol class="breadcrumb">
        <li class="active">查看图片详情</li>
      </ol>



    </div>
    <!-- End Page Header -->


    <div class="container-padding">



      <!-- Start Row -->
      <div class="row">

        <div class="col-md-12">
          <div class="panel panel-default">

            <div class="panel-title">
              图片信息
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
                  <label class="col-sm-2 control-label form-label">图片名称</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{dataForm.imageName}}</p>
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">图片路径</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{dataForm.path}}</p>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">发布人</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{dataForm.publishUserName}}</p>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">发布时间</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">{{dataForm.publishDate}}</p>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">缩略图</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">
                      
                      <img style="width:200px;" :src="dataForm.path"/>
                      
                    </p>
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label form-label"></label>
                  <div class="col-sm-10">
                    <a target="_blank" :href="dataForm.path" class="btn btn-square btn-default">查看原图</a>
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
        resourceId: this.$route.query.resourceId,
        dataForm: {}
      };
    },
    mounted(){
      this.getFile()
    },
    methods: {

      getFile() {
        let apiUri = "/restapi/resourceImage/search/findByResourceId?resourceId=" + this.resourceId;
        var result_en = ajax.get(apiUri).then(response => {
          this.dataForm = response;
          this.dataForm.path = urIConfig.imagePrefix + this.dataForm.path;
        });

      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
