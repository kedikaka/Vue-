<template>
  <div class="content">
    <!-- Start Page Header -->
    <div class="page-header">
      <h1 class="title">{{projectEn.projectName}}</h1>
      <ol class="breadcrumb">
        <li class="active" style="width:80%;">{{projectEn.projectDesc}}</li>
      </ol>

      <div class="right">
        <div class="btn-group" role="group" aria-label="...">
          <a @click="changeProjectStatus(20)" href="javascript:void(0);" style="width: 100px;" class="btn btn-success">
            <i class="fa fa-play"></i>开始项目
          </a>
          <a @click="changeProjectStatus(30)" href="javascript:void(0);" style="width: 100px;" class="btn btn-default">
            <i class="fa fa-check"></i>完成项目
          </a>
          <br>
          <a @click="changeProjectStatus(41)" href="javascript:void(0);" style="width: 100px;" class="btn btn-warning">
            <i class="fa fa-circle-o-notch"></i>挂起项目
          </a>
          <a @click="changeProjectStatus(40)" href="javascript:void(0);" style="width: 100px;" class="btn btn-option3">
            <i class="fa fa fa-close"></i>废弃项目
          </a>
        </div>
      </div>
    </div>
    <!-- End Page Header -->
    <div class="container-padding">
      <div class="row">
        <div class="col-md-12">
          <h4 class="font-w-700 font-title">项目基础信息
            <button type="button" @click="deleteProject" style="float:right;" class="btn btn-danger btn-icon">
              <i class="fa fa-warning"></i> 删除项目
            </button>
          </h4>

          <!-- Start Top Stats -->
          <ul class="topstats clearfix" style="font-size:20px;background-color:#e8f5f5;">
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-dot-circle-o"></i> 主管人
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;" class="color-down">{{projectEn.manageRealName}}</span>
                <a @click="assignProjectManager" class="btn-xs btn-default btn-success" href="javascript:void(0);">指定</a>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-asterisk"></i> 项目状态
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">
                  <div v-html="getProcessStatusHtml(projectEn.projectStatus)"></div>
                </span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 创建日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{projectEn.createDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 起始日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{projectEn.beginDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 结束日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{projectEn.endDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-cogs"></i> 操作
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">
                  <div class="btn-group">
                    <router-link :to="{ path: '/project/Update', query:{ projectId: projectId}}" class="btnProcessDropDown btn-primary btn">修改项目</router-link>
                    <router-link :to="{ path: '/process/Create', query:{ projectId: projectId}}" class="btnProcessDropDown btn-success btn">新建流程</router-link>
                  </div>
                </span>
              </div>
            </li>
          </ul>
          <!-- End Top Stats -->
        </div>
      </div>

      <div class="row">
        <!-- Start Browser Stats -->
        <div class="col-md-12 col-lg-3">
          <div class="panel panel-widget" style="height: 300px;">
            <div class="panel-title">
              成员清单
              <span style="float:right;margin-top:5px;">
                <router-link :to="{ path: '/project/userList', query:{ projectId: projectId}}">查看全部</router-link>
              </span>
            </div>
            <div class="panel-body">
              <ul class="basic-list">
                <li v-for="(userEn, index) of lstUserEn" v-bind:key="index">
                  <span style="width:80px;">{{userEn.userRealName}}</span>
                  <span style="margin-left:30px;">{{userEn.userName}}</span>
                  <span class="right label label-default">{{userEn.businessName}}{{userEn.roleName}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End Browser Stats -->
        <!-- Start Orders -->
        <div class="col-md-12 col-lg-5">
          <div class="panel panel-widget" style="height: 300px;">
            <div class="panel-title">
              操作日志
              <span class="label label-warning">2056</span>
              <span style="float:right;margin-top:5px;">
                <router-link :to="{ path: '/', query:{ projectId: projectId}}">查看全部...</router-link>
              </span>
            </div>

            <div class="panel-search">
              <form>
                <input type="text" class="form-control" placeholder="Search...">
                <i class="fa fa-search icon"></i>
              </form>
            </div>

            <div class="panel-body table-responsive">
              <table id="tbOperation" class="table table-hover table-striped">
                <thead>
                  <tr>
                    <td class="text-center">
                      <i class="fa fa-trash"></i>
                    </td>
                    <td>操作人</td>
                    <td>动作</td>
                    <td>结果</td>
                    <td>时间</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">
                      <div class="checkbox margin-t-0">
                        <input id="checkbox1" type="checkbox">
                        <label for="checkbox1"></label>
                      </div>
                    </td>
                    <td>#
                      <b>张三</b>
                    </td>
                    <td>新增</td>
                    <td>项目【湖南CP对接】</td>
                    <td>2018-10-11 15:23:01</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <div class="checkbox margin-t-0">
                        <input id="checkbox1" type="checkbox">
                        <label for="checkbox1"></label>
                      </div>
                    </td>
                    <td>#
                      <b>张三</b>
                    </td>
                    <td>新增</td>
                    <td>项目【湖南CP对接】</td>
                    <td>2018-10-11 15:23:01</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <div class="checkbox margin-t-0">
                        <input id="checkbox1" type="checkbox">
                        <label for="checkbox1"></label>
                      </div>
                    </td>
                    <td>#
                      <b>张三</b>
                    </td>
                    <td>新增</td>
                    <td>项目【湖南CP对接】</td>
                    <td>2018-10-11 15:23:01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- End Orders -->
        <!-- Start Inbox -->
        <div class="col-md-12 col-lg-4">
          <div class="panel panel-widget" style="height: 300px;">
            <div class="panel-title">
              资源清单
              <span class="label label-danger">29</span>
              <span style="float:right;margin-top:5px;">
                <a href="#">查看全部...</a>
              </span>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-dic table-hover">
                <tbody>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>Projects
                    </td>
                    <td>Folder</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-file-archive-o"></i>Backup
                    </td>
                    <td>Zip</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-file-code-o"></i>Kode Theme
                    </td>
                    <td>Html</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-file-pdf-o"></i>Documents
                    </td>
                    <td>Pdf</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>Uploaded Files
                    </td>
                    <td>Folder</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-folder-o"></i>Personal Files
                    </td>
                    <td>Folder</td>
                    <td class="text-r">27/2/2015 12:34 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- End Inbox -->
      </div>

      <div v-for="(processEn, index) of lstProcessFullEn" v-bind:key="index" class="row">
        <div class="col-md-12">
          <h4>【流程】{{processEn.processName}}</h4>
          <p>{{processEn.processDesc}}</p>

          <!-- Start Top Stats -->
          <ul class="topstats clearfix" style="font-size:20px;background-color:#f4fdf0;">
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-dot-circle-o"></i> 主管人
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;" class="color-down">{{processEn.manageRealName}}</span>
                <a @click="assignProcessManager(processEn)" class="btn-xs btn-default btn-success" href="javascript:void(0);">指定</a>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-asterisk"></i> 流程状态
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">
                  <div v-html="getProcessStatusHtml(processEn.processStatus)"></div>
                </span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 创建日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{processEn.createDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 起始日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{processEn.beginDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-calendar-o"></i> 结束日期
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">{{processEn.endDate}}</span>
              </div>
            </li>
            <li class="col-xs-6 col-lg-2">
              <span class="title">
                <i class="fa fa-cogs"></i> 操作
              </span>
              <div style="margin-top: 8px;">
                <span style="font-size:20px;">
                  <div class="btn-group">
                    <button type="button" class="btnProcessDropDown btn-option4 btn">操作</button>
                    <button type="button" class="btnProcessDropDown btn-option4 btn dropdown-toggle" data-toggle="dropdown"
                      aria-expanded="false">
                      <span class="caret"></span>
                      <span class="sr-only">操作</span>
                    </button>
                    <ul class="dropdown-menu" style="min-width:130%;" role="menu">
                      <li>
                        <a href="javascript:void(0);" @click="changeProcessStatus(processEn, 20)" style="padding:0;font-size:0.8em;">
                          <i class="fa fa-play"></i> 开始流程
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="changeProcessStatus(processEn, 30)" style="padding:0;font-size:0.8em;">
                          <i class="fa fa-check"></i> 完成流程
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="changeProcessStatus(processEn, 41)" style="padding:0;font-size:0.8em;">
                          <i class="fa fa-circle-o-notch"></i> 挂起流程
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" @click="changeProcessStatus(processEn, 40)" style="padding:0;font-size:0.8em;">
                          <i class="fa fa-close"></i> 废弃流程
                        </a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/process/update',  query:{ processId: processEn.processId}}">修改流程</router-link>
                      </li>
                      <li>
                        <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/step/create',  query:{ processId: processEn.processId}}">新建步骤</router-link>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/process/UserList',  query:{ processId: processEn.processId}}">成员清单</router-link>
                      </li>
                      <li>
                        <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/process/ResourceList',  query:{ processId: processEn.processId}}">资源清单</router-link>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </li>
          </ul>
          <!-- End Top Stats -->
        </div>

        <div class="col-md-11" style="float: right;">
          <div class="panel panel-default" style="background-color:#fdf5f9;padding: 20px 0px 20px 0px;">
            <div class="panel-body table-responsive">
              <p style="margin-left:20px;">该流程下的所有步骤</p>

              <table class="tbStep table table-striped">
                <thead>
                  <tr>
                    <td>负责人</td>
                    <td>步骤状态</td>
                    <td>创建日期</td>
                    <td>起始日期</td>
                    <td>结束日期</td>
                    <td>步骤内容</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(stepEn, index) of processEn.lstStepEn" v-bind:key="index">
                    <td>
                      #
                      <b>{{stepEn.manageRealName}}</b>
                      <a @click="assignStepManager(stepEn)" style="margin-left:3px;" class="btn-xs btn-default btn-success"
                        href="javascript:void(0);">指定</a>
                    </td>
                    <td>
                      <div v-html="getStepStatusHtml(stepEn.stepStatus)"></div>
                    </td>
                    <td>{{stepEn.createDate}}</td>
                    <td>{{stepEn.beginDate}}</td>
                    <td>{{stepEn.endDate}}</td>
                    <td>{{stepEn.stepName}}</td>
                    <td>
                      <div class="btn-group">
                        <a href="javascript:void(0);" @click="openStepMessage(stepEn)" style="margin-left:10px;">消息日志</a>
                        <button type="button" class="btnProcessDropDown btn-light btn btn-sm">操作</button>
                        <button type="button" class="btnProcessDropDown btn-light btn btn-sm dropdown-toggle"
                          data-toggle="dropdown" aria-expanded="false">
                          <span class="caret"></span>
                          <span class="sr-only">步骤操作</span>
                        </button>

                        <ul class="dropdown-menu" style="min-width:130%;text-align:center;" role="menu">
                          <li>
                            <a href="javascript:void(0);" @click="changeStepStatus(stepEn, 20)" style="padding:0;font-size:0.8em;">
                              <i class="fa fa-play"></i> 开始步骤
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" @click="changeStepStatus(stepEn, 30)" style="padding:0;font-size:0.8em;">
                              <i class="fa fa-check"></i> 完成步骤
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" @click="changeStepStatus(stepEn, 41)" style="padding:0;font-size:0.8em;">
                              <i class="fa fa-circle-o-notch"></i> 挂起步骤
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" @click="changeStepStatus(stepEn, 40)" style="padding:0;font-size:0.8em;">
                              <i class="fa fa-close"></i> 废弃步骤
                            </a>
                          </li>
                          <li class="divider"></li>

                          <li>
                            <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/step/update',  query:{ stepId: stepEn.stepId}}">修改步骤</router-link>
                          </li>
                          <li class="divider"></li>
                          <li>
                            <router-link style="padding:0;font-size:0.8em;" :to="{ path: '/step/UserList',  query:{ stepId: stepEn.stepId}}">成员清单</router-link>
                          </li>
                          <li>
                            <a style="padding:0;font-size:0.8em;" href="#">资源清单</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import common from "@/common/common";
  import ajax from "@/common/ajax";

  export default {
    name: "projectCreate",
    data() {
      return {
        projectId: this.$route.query.projectId,
        projectEn: {},
        lstProcessFullEn: [],
        lstUserEn: [],
        lstResourceEn: [],
        lstOperationEn: [],

        getProcessStatusHtml: common.stringCommon.getProcessStatusHtml,
        getStepStatusHtml: common.stringCommon.getStepStatusHtml
      };
    },
    watch: {
      $route(to, from) {
        this.$router.go(0);
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      test: function () {
        let url = "/#/admin/UserSelect";
        let self_dataForm = this.dataForm;
        layer.open({
          type: 2,
          title: "头像选择",
          btn: ["选择"],
          maxmin: false,
          shadeClose: true, //点击遮罩关闭层
          area: ["835px", "900px"],
          content: url,
          yes: function (index, layero) {
            let body = layer.getChildFrame("body", index);
            let avatar = $(body)
              .find('input:radio[name="radAvatar"]:checked')
              .val();
            this.avatar = avatar;
            self_dataForm["avatar"] = avatar;
          }
        });
      },

      openStepMessage: function (stepEn) {
        let url = "/#/step/Message?stepId=" + stepEn["stepId"];
        layer.open({
          type: 2,
          title: "步骤消息",
          maxmin: true,
          shadeClose: true, //点击遮罩关闭层
          area: ["750px", "820px"],
          content: url
        });
      },

      init: function () {
        this.getProject();
        this.getProjectUser();
        this.getProcessFull();
      },
      bindEvent: function () {
        $(".btnProcessDropDown").bind("click", function () {
          if (
            $(this)
            .next(".dropdown-menu")
            .is(":hidden")
          ) {
            $(".dropdown-menu").hide();
            $(this)
              .next(".dropdown-menu")
              .show();
          } else {
            $(this)
              .next(".dropdown-menu")
              .hide();
          }
        });
      },
      getProcessFull() {
        let apiUri = "/api/project/processFull?projectId=" + this.projectId;
        var result_en = ajax.get(apiUri).then(response => {
          this.lstProcessFullEn = response;
          this.$nextTick(function () {
            this.bindEvent();
          });
        });
      },

      getProject() {
        let apiUri = "/restapi/project/" + this.projectId;
        ajax.get(apiUri).then(response => {
          this.projectEn = response;
        });
      },

      deleteProject() {
        let self = this;
        let apiUri = "/restapi/project/" + this.projectId;
        let paramsData = {};
        paramsData['status'] = 0;
        console.log(paramsData);

        ajax.patch(apiUri, paramsData).then(response => {

          layer.alert('项目删除成功，即将跳转到首页。', {
            title: '执行结果',
            icon: 1
          },
          function (index) {
            self.$router.push({
              path: '/Home'
            });
            layer.close(index);
          });

        });
      },

      getProjectUser() {
        let apiUri = "/api/project/projectUserRelation";
        var result_en = ajax
          .get(apiUri, {
            projectId: this.projectId,
            size: 5
          })
          .then(response => {
            this.lstUserEn = response;
          });
      },
      changeProjectStatus(projectStatus) {
        let apiUri = "/restapi/project/" + this.projectId;
        let paramsData = {};
        paramsData["projectStatus"] = projectStatus;

        ajax.patch(apiUri, paramsData).then(response => {
          layer.msg("状态更新成功！");
          this.projectEn["projectStatus"] = projectStatus;
        });
      },

      changeProcessStatus(processEn, processStatus) {
        let apiUri = "/restapi/process/" + processEn.processId;
        let paramsData = {};
        paramsData["processStatus"] = processStatus;

        ajax.patch(apiUri, paramsData).then(response => {
          layer.msg("状态更新成功！");
          processEn.processStatus = processStatus;
        });
      },

      changeStepStatus(stepEn, stepStatus) {
        let apiUri = "/restapi/step/" + stepEn.stepId;
        let paramsData = {};
        paramsData["stepStatus"] = stepStatus;

        ajax.patch(apiUri, paramsData).then(response => {
          layer.msg("状态更新成功！");
          stepEn.stepStatus = stepStatus;
        });
      },

      assignProjectManager: function () {
        let url = "/#/admin/UserSelect";
        let self_projectEn = this.projectEn;
        let self_projectId = this.projectId;
        let self = this;

        layer.open({
          type: 2,
          title: "用户选择",
          btn: ["选择"],
          maxmin: false,
          shadeClose: true, //点击遮罩关闭层
          area: ["835px", "900px"],
          content: url,
          yes: function (index, layero) {
            let body = layer.getChildFrame("body", index);
            let userMsg = $(body)
              .find('input:radio[name="radUser"]:checked')
              .val();

            layer.close(index);
            if (!userMsg) {
              layer.msg("未选择用户！");
            } else {
              let userArray = userMsg.split("|");
              self_projectEn["manageUserId"] = userArray[0];
              self_projectEn["manageUserName"] = userArray[1];
              self_projectEn["manageRealName"] = userArray[2];

              let updateProjectApiUri = "/restapi/project/" + self_projectId;
              ajax.patch(updateProjectApiUri, self_projectEn).then(response => {
                layer.msg(
                  "指派【" +
                  self_projectEn["manageRealName"] +
                  "】为项目【" +
                  self_projectEn["projectName"] +
                  "】的【主管】成功！"
                );

                let projectUserEn = {
                  projectId: self_projectEn["projectId"],
                  projectName: self_projectEn["projectName"],
                  userId: userArray[0],
                  userName: userArray[1],
                  userRealName: userArray[2],
                  roleId: 1,
                  roleName: "主管人",
                  status: 1
                };

                let addProjectUserApiUri = "/api/project/projectUserRelation";
                ajax.post(addProjectUserApiUri, projectUserEn).then(response => {
                  self.getProjectUser();
                });
              });
            }
          }
        });
      },

      assignProcessManager: function (processEn) {
        let url = "/#/admin/UserSelect";
        let self_En = processEn;
        let self = this;

        layer.open({
          type: 2,
          title: "用户选择",
          btn: ["选择"],
          maxmin: false,
          shadeClose: true, //点击遮罩关闭层
          area: ["835px", "900px"],
          content: url,
          yes: function (index, layero) {
            let body = layer.getChildFrame("body", index);
            let userMsg = $(body)
              .find('input:radio[name="radUser"]:checked')
              .val();

            layer.close(index);
            if (!userMsg) {
              layer.msg("未选择用户！");
            } else {
              let userArray = userMsg.split("|");
              self_En["manageUserId"] = userArray[0];
              self_En["manageUserName"] = userArray[1];
              self_En["manageRealName"] = userArray[2];

              let apiUri = "/restapi/process/" + self_En["processId"];
              ajax.patch(apiUri, self_En).then(response => {
                layer.msg(
                  "指派【" +
                  self_En["manageRealName"] +
                  "】为项目【" +
                  self_En["processName"] +
                  "】的【主管】成功！"
                );

                let processUserEn = {
                  processId: self_En["processId"],
                  processName: self_En["processName"],
                  userId: userArray[0],
                  userName: userArray[1],
                  userRealName: userArray[2],
                  roleId: 1,
                  roleName: "主管人",
                  status: 1
                };

                let addProcessUserApiUri = "/api/process/processUserRelation";
                ajax.post(addProcessUserApiUri, processUserEn).then(response => {
                  self.getProjectUser();
                });
              });
            }
          }
        });
      },

      assignStepManager: function (stepEn) {
        let url = "/#/admin/UserSelect";
        let self_En = stepEn;
        let self = this;

        layer.open({
          type: 2,
          title: "用户选择",
          btn: ["选择"],
          maxmin: false,
          shadeClose: true, //点击遮罩关闭层
          area: ["835px", "900px"],
          content: url,
          yes: function (index, layero) {
            let body = layer.getChildFrame("body", index);
            let userMsg = $(body)
              .find('input:radio[name="radUser"]:checked')
              .val();

            layer.close(index);
            if (!userMsg) {
              layer.msg("未选择用户！");
            } else {
              let userArray = userMsg.split("|");
              self_En["manageUserId"] = userArray[0];
              self_En["manageUserName"] = userArray[1];
              self_En["manageRealName"] = userArray[2];

              let apiUri = "/restapi/step/" + self_En["stepId"];
              ajax.patch(apiUri, self_En).then(response => {
                layer.msg(
                  "指派【" +
                  self_En["manageRealName"] +
                  "】为项目【" +
                  self_En["stepName"] +
                  "】的【主管】成功！"
                );

                let stepUserEn = {
                  stepId: self_En["stepId"],
                  stepName: self_En["stepName"],
                  userId: userArray[0],
                  userName: userArray[1],
                  userRealName: userArray[2],
                  roleId: 1,
                  roleName: "主管人",
                  status: 1
                };

                let addStepUserApiUri = "/api/step/stepUserRelation";
                ajax.post(addStepUserApiUri, stepUserEn).then(response => {
                  self.getProjectUser();
                });
              });
            }
          }
        });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tbOperation td {
    padding: 5px 15px 5px 15px;
    vertical-align: middle;
  }

  .tbStep td {
    padding: 10px 15px 10px 15px;
    vertical-align: middle;
  }

</style>
