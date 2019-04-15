import Vue from 'vue';

let common = {};

common.config = {
  //自定义debug模式
  debug: true,
  systemName: 'migu-businesstracker-web-restapi'
}

common.function = {
  /**
   * 判断一个数字是奇数还是偶数
   * 返回true是偶数，false是奇数
   */
  'checkOdevity': function (num) {
    let flag = num % 2 == 0 ? true : false;
    return flag;
  },
  /**
   * 在更新数据的patch请求时，对请求参数做初始化。
   * 移除掉为空的值
   * 添加updateUser
   */
  'patchParamInit': function (param_data, updateUser) {
    let return_en = {};
    
    for (var key in param_data) {
      console.log(param_data[key]);

      if (param_data[key] || param_data[key] == 0) {
        return_en[key] = param_data[key];
      }
    }
    return return_en;
  },

  'jsonToQueryString': function (data) {
    try {
      var tempArr = [];
      for (var i in data) {
        var key = encodeURIComponent(i);
        var value = encodeURIComponent(data[i]);
        tempArr.push(key + '=' + value);
      }
      var urlParamsStr = tempArr.join('&');
      return urlParamsStr;
    } catch (err) {
      return '';
    }

  },

  /**
   * 以分隔符连接一个字符串数组
   */
  'linkArrayStr': function (separator, arr) {
    return arr.join(separator);
  },

  'test': function () {
    alert('test');
  },


}

common.stringCommon = {
  'getStatusButtonHtml': function (status) {
    switch (status) {
      case 1:
        return '<span class="btn-xs btn-default btn-option1">有效</span>';
      case 2:
        return '<span class="btn-xs btn-default btn-success">无效</span>';
      default:
        return (
          '<span class="btn-xs btn-default btn-option4">未知' +
          status +
          "</span>"
        );
    }
  },
  'getProcessStatusHtml': function (status) {
    switch (status) {
      case 10:
        return '<span class="btn-xs btn-default btn-option1">已创建</span>';
      case 20:
        return '<span class="btn-xs btn-default btn-success">进行中</span>';
      case 30:
        return '<span class="btn-xs btn-default btn-option3">已完成</span>';
      case 40:
        return '<span class="btn-xs btn-default btn-danager">已放弃</span>';
      case 41:
        return '<span class="btn-xs btn-default btn-option2">挂起</span>';
      default:
        return (
          '<span class="btn-xs btn-default btn-option4">未知' +
          status +
          "</span>"
        );
    }

  },
  'getStepStatusHtml': function (status) {
    switch (status) {
      case 10:
        return '<span class="btn-xs btn-default btn-option1">已创建</span>';
      case 20:
        return '<span class="btn-xs btn-default btn-success">进行中</span>';
      case 30:
        return '<span class="btn-xs btn-default btn-option3">已完成</span>';
      case 40:
        return '<span class="btn-xs btn-default btn-danager">已放弃</span>';
      case 41:
        return '<span class="btn-xs btn-default btn-option2">挂起</span>';
      default:
        return (
          '<span class="btn-xs btn-default btn-option4">未知' +
          status +
          "</span>"
        );
    }
  },
  'getResourceType': function (resourceEn) {
    switch (resourceEn.resourceType) {
      case 1:
        return '在线文档';
      case 2:
        return 'md在线文档';
      case 3:
        return resourceEn.fileExt + '图片';
      case 4:
        return resourceEn.fileExt + '文件';
      default:
        return '未知';
    }
  }

};

common.business = {
  /**
   * 获取删除用户与项目、流程、步骤关系的api
   */
  'getDeleteUserRelationApi': function (entity) {
    switch (entity.businessLevel) {
      case 1:
        return '/restapi/projectUserRelation/' + entity.relationUserId;
      case 2:
        return '/restapi/processUserRelation/' + entity.relationUserId;
      case 3:
        return '/restapi/stepUserRelation/' + entity.relationUserId;
      default:
        return '';
    }
  }
};

export default common;
