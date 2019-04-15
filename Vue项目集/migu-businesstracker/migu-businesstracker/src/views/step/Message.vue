<template>
  <div class="">
    <div class="">
      <div class="social-profile">
        <div class="social-content clearfix">
          <div class="col-md-6 col-lg-4">

            <!-- Start Post -->
            <div class="panel panel-default">
              <div class="panel-body status">
                <div class="who clearfix">
                  <img :src="adminUserEn.avatar" alt="img">
                  <span class="name"><b>{{stepEn.stepName}}</b> 进行中</span>
                  <span class="from"><b>开始于{{stepEn.createDate}}</b></span>
                </div>
                <ul class="comments">
                  <li>
                    <img :src="adminUserEn.avatar" alt="img">
                    <input type="text" v-model="txtContent" style="width:78%;display:inline;" class="form-control"
                      placeholder="请输入...">
                    <a id="btnAdd" href="javascript:void(0);" @click="addMessage" style="width:20%;float:right;margin-bottom: 4px;"
                      class="btn btn-success">发送</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End Post -->

            <!-- Start Post -->
            <div class="panel panel-default">
              <div class="panel-body status">


                <ul class="comments">
                  <li v-for="(entity, index) of listData" v-bind:key="index">
                    <img :src="entity.avatar" alt="img">

                    <span class="name" style="display:inline;">
                      <a href="javascript:void(0);"><b>{{entity.userRealName}}</b></a> 发布
                    </span>
                    <span class="name" style="display:inline;margin-left:60%;">{{entity.createDate}}</span>

                    <div>
                      {{entity.message}}
                    </div>
                  </li>

                </ul>

              </div>
            </div>
            <!-- End Post -->



          </div>

        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import ajax from "@/common/ajax";
  import common from "@/common/common";

  export default {
    name: "stepUserList",
    data() {
      return {
        stepId: this.$route.query.stepId,
        stepEn: {},
        adminUserEn: {},
        listData: [],
        txtContent: ''
      };
    },
    mounted() {
      this.getStep();
      this.getStepMessage();
      this.getAdminUser();
    },
    methods: {
      getStep: function () {
        let apiUri = "/restapi/step/" + this.stepId;
        ajax.get(apiUri).then(response => {
          this.stepEn = response;
        });
      },

      getStepMessage: function () {
        let apiUri = '/restapi/stepMessage/search/findByStepIdOrderByCreateDateDesc?stepId=' + this.stepId;
        var result_en = ajax
          .get(apiUri)
          .then(response => {
            this.listData = response._embedded.stepMessageEntities;
            this.listData.forEach(
              item => (item.userAvatar = urIConfig.avatarImagePrefix + item.userAvatar)
            );
          });
      },

      getAdminUser() {
        let userId = Cookies.get("loginUser");
        let apiUri = "/restapi/adminUser/" + userId;

        let self = this;
        ajax.get(apiUri).then(response => {
          this.adminUserEn = response;
          this.adminUserEn.avatar = urIConfig.avatarImagePrefix + this.adminUserEn.avatar;
        }).catch(function (err) {
          if (err.response.status == 404) {
            alert('不存在的用户，请重新登陆！');
            self.$router.push({
              path: '/admin/login'
            });
          }
        });
      },

      verifyDate() {
        if (!this.txtContent) {
          return '消息内容不允许为空';
        };

        return null;
      },
      addMessage: function () {
        let errMsg = this.verifyDate();
        if (errMsg != null) {
          alert(errMsg);
          return false;
        }


        let userId = Cookies.get("loginUser");
        let paramData = {};
        paramData['stepId'] = this.stepId;
        paramData['userId'] = userId;
        paramData['message'] = this.txtContent;

        ajax.post("/api/step/stepMessage", paramData)
          .then(response => {
            layer.tips('消息发布成功!', '#btnAdd');
            this.listData.unshift(response);
          });

      },
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
