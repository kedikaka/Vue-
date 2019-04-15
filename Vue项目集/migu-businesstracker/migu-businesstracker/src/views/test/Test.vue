<template>
  <div>

    <ul>
      <li class="">项目与管理</li>

      <li v-for="entity of listProjectData">
        <a @click="expand(entity)" href="javascript:void(0);">
          <span class="icon color9">
            <i class="fa fa-leaf"></i>
          </span>{{entity.projectName}}
          <span class="caret"></span>
        </a>
        <ul v-show="entity.ulExpand">
          <li>
            <a href="basic-table.html">项目流程</a>
          </li>
          <li>
            <a href="data-table.html">文档中心</a>
          </li>
          <li>
            <a href="/person/list">通讯薄</a>
          </li>
        </ul>
      </li>

    </ul>


    <ul id="b">
      <li v-for='item in items' v-bind:key="item.projectName" @click="toggle(item)">
        <span v-if='item.show'>{{item.projectName}}</span>1
        <ul v-show="item.ulExpand">
          <li>11
            <a href="basic-table.html">项目流程</a>
          </li>
          <li>
            <a href="data-table.html">文档中心</a>
          </li>
          <li>
            <a href="/person/list">通讯薄</a>
          </li>
        </ul>
      </li>

    </ul>

  </div>
</template>


<script>
  import common from "@/common/common";
  import ajax from "@/common/ajax";

  export default {

    name: 'test',
    data() {
      return {
        items: [{
          projectName: '1 item',
          show: true,
          ulExpand: false,
        }, {
          projectName: '2 item',
          show: true,
          ulExpand: false,
        }, {
          projectName: '3 item',
          show: true,
          ulExpand: false,
        }],
        listProjectData: this.getAllProject()
      }
    },
    mounted() {
      // this.getAllProject();
      // for (var index in this.items) {
      //   items[index].ulExpand = false;
      // }
    },
    methods: {
      toggle: function (item) {
        console.log(item);
        console.log(11);
        if (typeof item.ulExpand === 'undefined') {
          alert(1);
          item.ulExpand = false;
        }
        item.ulExpand = !item.ulExpand;
        alert(item.ulExpand);
      },
      expand1: function (entity) {
        entity.ulExpand = false;
        entity.ulExpand = !entity.ulExpand;
        console.log(entity.ulExpand);
      },
      expand: function (entity) {
        console.log(entity);
        console.log(entity.ulExpand);
        entity.ulExpand = !entity.ulExpand;
        console.log(entity.ulExpand);
      },
      getAllProject: function () {
        let apiUrl = "/restapi/project";
        var result_en = ajax.get(apiUrl).then(response => {
          let lstData = response._embedded.projectEntities;
          for (var index in lstData) {
            lstData[index].ulExpand = false;
            alert(0);
          }
          
          this.listProjectData = lstData;
          console.log(lstData);
        });
      },

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
