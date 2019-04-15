<template>

  <div style="width:690px;">

    <div style="margin:10px;">
      <div class="panel panel-default">
        <div class="panel-body table-responsive">
          <table class="table table-hover">
            <thead>

            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <div class="radio radio-danger">
                    <input type="radio" v-model="radAvatar"  id="rad1" name="radAvatar" value="image/avatar/default/1.jpg" /><label for="rad1"></label>
                  </div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/1.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad2" name="radAvatar" value="image/avatar/default/2.jpg" /><label for="rad2"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/2.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad3" name="radAvatar" value="image/avatar/default/3.jpg" /><label for="rad3"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/3.jpg" /></td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad4" name="radAvatar" value="image/avatar/default/4.jpg" /><label for="rad4"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/4.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad5" name="radAvatar" value="image/avatar/default/5.jpg" /><label for="rad5"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/5.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad6" name="radAvatar" value="image/avatar/default/6.jpg" /><label for="rad6"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/6.jpg" /></td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad7" name="radAvatar" value="image/avatar/default/7.jpg" /><label for="rad7"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/7.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad8" name="radAvatar" value="image/avatar/default/8.jpg" /><label for="rad8"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/8.jpg" /></td>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad9" name="radAvatar" value="image/avatar/default/9.jpg" /><label for="rad9"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/9.jpg" /></td>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="radio radio-danger"><input type="radio" v-model="radAvatar"  id="rad10" name="radAvatar" value="image/avatar/default/10.jpg" /><label for="rad10"></label></div>
                </td>
                <td><img style="width:100px;height:100px;" src="static/upload/image/avatar/default/10.jpg" /></td>
                <td class="text-center">

                </td>
                <td></td>
                <td class="text-center">
                    <a @click="selectRad">test</a>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
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
        //表格显示内容
        radAvatar: 'image/avatar/default/1.jpg',
      };
    },
    mounted() {
    },

    methods: {
      selectRad: function(){
        alert(this.radAvatar);
      },

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-md-2 {
    padding: 3px 1px;
  }

  .panel {
    padding: 10px 20px;
    margin-bottom: 5px;
  }

</style>
