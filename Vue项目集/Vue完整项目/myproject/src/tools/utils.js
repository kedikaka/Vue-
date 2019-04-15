import Vue from 'vue'

// 截取url中的数据
const getUrlData = function getUrlData() {
  /**
   * tempStr 格式是http://域名/路由?key=value&key=value...
   */
  let tempStr = window.location.href
  /**
   * tempArr 是一个字符串数组 格式是["key=value", "key=value", ...]
   */
  let tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : []
  /**
   * returnArr 是要返回出去的数据对象 格式是 { key: value, key: value, ... }
   */
  let returnArr = {}
  tempArr.forEach(element => {
    returnArr[element.split('=')[0]] = element.split('=')[1]
  })
  /*输出日志*/
  console.log(returnArr);
  return returnArr
}


// 拼接url options={url:"",val:{}}
// 如果不传入url默认获取的是当前地址栏的url      window.location.href
const concactToUrl = function concactToUrl(options) {
  var url = '';
  if (options.url == undefined) {
    url = window.location.href;
  } else {
    url = options.url;
  }
  console.log(url)
  if (url.indexOf('?') != '-1') {
    var str = '&';
    for (var i in options.val) {
      str += i + '=' + options.val[i] + "&";
    }
  } else {
    var str = '?';
    for (var i in options.val) {
      str += i + '=' + options.val[i] + "&";
    }
  }
  return (url + str.substring(0, str.length - 1));
}

// import XLSX from 'xlsx'
/**
 * 图片预览方法
 * 已注入所有Vue实例，
 * template模板里调用 $imgPreview(src)
 * 组件方法里调用 this.$imgPreview(src)
 */
const imgPreview = (src) => {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let close = document.createElement('i')
  div.className = 'body__img__preview'
  img.src = src
  close.className = 'body__img__close'
  close.onclick = () => {
    document.body.removeChild(div)
  }
  div.appendChild(img)
  div.appendChild(close)
  document.body.appendChild(div)
}

/**
 * 格式化日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $dateFormat(date)
 * 组件方法里调用 this.$dateFormat(date)
 * 例：this.$dateFormat('Dec 27, 2017 3:18:14 PM') 得到 '2017-12-27 15:18:14'
 */

const dateFormat = (date) => {
  if (!date) return ''
  let date_format = new Date(date)
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let mydate = date_format.getDate()
  if (mydate < 10) mydate = '0' + mydate
  let hours = date_format.getHours()
  if (hours < 10) hours = '0' + hours
  let minutes = date_format.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  let seconds = date_format.getSeconds()
  if (seconds < 10) seconds = '0' + seconds
  let time = `${year}-${month}-${mydate} ${hours}:${minutes}:${seconds}`
  return time
}

/**
 * 格式化日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $dateFormatNoTime(date)
 * 组件方法里调用 this.$dateFormatNoTime(date)
 * 例：this.$dateFormatNoTime('Dec 27, 2017 3:18:14 PM') 得到 '2017-12-27'
 */

const dateFormatNoTime = (date) => {
  if (!date) return ''
  let date_format = new Date(date)
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let mydate = date_format.getDate()
  if (mydate < 10) mydate = '0' + mydate
  let time = `${year}-${month}-${mydate}`
  return time
}

/**
 * 获取当天日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $todayFormat
 * 组件方法里调用 this.$todayFormat
 * 例：this.$todayFormat() 得到 '2018-01-31'
 */

const todayFormat = () => {
  let date_format = new Date()
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let date = date_format.getDate()
  if (date < 10) date = '0' + date
  let time = `${year}-${month}-${date}`
  return time
}

/**
 * 导出数据报表xlsx文件
 * 已注入所有Vue实例，
 * template模板里调用 $$outputXlsxFile
 * 组件方法里调用 this.$outputXlsxFile
 * 例：this.$outputXlsxFile([['字段1', '字段2'], [1, 2]], [{wch: 10}, {wch: 50}], '测试导出') 得到 测试导出.xlsx 文件
 * 第一个参数是导出的数组对象，第二个参数是设置字段宽度，第三个参数是文件名
 */
// const outputXlsxFile = (data, wscols, xlsxName) => {
// /* convert state to workbook */
// const ws = XLSX.utils.aoa_to_sheet(data)
// ws['!cols'] = wscols
// const wb = XLSX.utils.book_new()
// XLSX.utils.book_append_sheet(wb, ws, xlsxName)
// /* generate file and send to client */
// XLSX.writeFile(wb, xlsxName + ".xlsx")
// }

/**
 * 判断开始时间和结束时间
 * 已注入所有Vue实例，
 * template模板里调用 $checkTime
 * 组件方法里调用 this.$checkTime
 * 例：this.$checkTime(['2018-01-01', '2018-02-02']) 得到 {'2018/01/01', '2018/02/02'}
 */
const checkTime = (date) => {
  if (!date) {
    Vue.prototype.$notify.error({
      message: '日期不能为空'
    })
    return false
  } else {
    let begTime = date[0].replace(/-/g, '/')
    let endTime = date[1].replace(/-/g, '/')
    if (+((new Date(endTime)).getTime()) < +((new Date(begTime)).getTime())) {
      Vue.prototype.$notify.error({
        message: '开始日期不能大于结束日期'
      })
      return false
    } else {
      begTime = date[0]
      endTime = date[1]
      return {
        begTime,
        endTime
      }
    }
  }
}
/**
 * 判断性别
 * 已注入所有Vue实例，
 * template模板里调用 $typeSex
 * 组件方法里调用 this.$typeSex
 * 例：this.$typeSex(1) 得到 男
 * 参数 0：未知 1:男 2:女
 */

const typeSex = (value) => {
  let sex = ''
  switch (value) {
    case '0':
      sex = '未知'
      break
    case '1':
      sex = '男'
      break
    case '2':
      sex = '女'
      break
  }
  return sex
}

/**
 * 时间戳转换
 * 已注入所有Vue实例，
 * template模板里调用 $timestampToTime
 * 组件方法里调用 this.$timestampToTime
 * 例：this.$timestampToTime(1523440865000) 得到 '2018-04-11 18:1:5'
 */

const timestampToTime = (timestamp) => {
  var date = new Date(timestamp)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return Y + M + D + h + m + s
}

// 判断是否为空
const isEmpty = function emptyFun(obj) {
  var obj = obj;
  if (obj == "" || obj == null || obj == undefined || obj == "null" || obj == "undefined") {
    return true;
  } else {
    return false;
  }
}

// 判断设备类型

/**
 * 判断是否苹果移动设备访问
 */
function isAppleMobileDevice() {
  return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent
    .toLowerCase()));
}

/**
 * 判断是否安卓移动设备访问
 */
function isAndroidMobileDevice() {
  return (/android/i.test(navigator.userAgent.toLowerCase()));
}

// 通用的Tips框
const tips = function tips(msg) {
  if ($('#tip').length != 0) {
    // 说明存在提示框
  } else {
    // 说明不存在提示框
    var tipStr = '';
    tipStr += '<p id="tip" style="color:white;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);font-size: 0.3rem;line-height: 0.6rem;background: rgba(0, 0, 0, 1);padding:0 0.3rem;border-radius:0.6rem;z-index:999999 ">你好啊</p>'
    $('body').append(tipStr);
  }
  $("#tip").html(msg);
  $("#tip").fadeIn(0.3, function () {
    setTimeout(autoplay, 500);

    function autoplay() {
      $("#tip").fadeOut(1000)
    }
  });
}

// 移动端app分享方法调用
function appShare(obj) { //微信分享
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var title = obj.title;
  var content = obj.content;
  var nactLogoUrl = obj.nactLogoUrl;
  var shareUrl = obj.shareUrl;
  if (isAndroid) {
    window.android.invokeNativeShare(title, content, shareUrl, nactLogoUrl);
  }
  if (isiOS) {
    window.ios.invokeNativeShare(title, content, shareUrl, nactLogoUrl);
  }
}

// 移动端微信分享方法调用
const wxShare = function wxShare(shareConfig){
    var title = shareConfig.title;
    var desc = shareConfig.desc;
    var link = shareConfig.link;
    var imgUrl = shareConfig.imgUrl; 
    wx.ready(function(){
        //查看微信配置是否成功
        wx.onMenuShareTimeline({
            title: title,
            link: link,
            imgUrl:imgUrl,    
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回.
                //alert('click shared');
            },
            success: function (res) {
            },
            cancel: function (res) {//取消时，不做任何处理
                // errorMsg2("分享取消");
            },
            fail: function (res) {//失败时不做任何处理
                // alert(JSON.stringify(res));
            }
        });
        //分享给好友
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            // link:location.href,
            imgUrl:imgUrl,
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                // errorMsg("分享取消");
            }	
        });      
    });
}


// 配置微信sppID和微信签名
function wxConfig(){
  var url = location.href.split('#').toString(); //url不能写死
  /**--成功跳转判断  **/
// 请求微信参数的url
  $.post('url', {
      url: url
    },
    function (data) {
      data = $.parseJSON(data);
      wx.config({
        debug: false, ////生产环境需要关闭debug模式
        appId: data['appId'], //appId通过微信服务号后台查看
        timestamp: data['timestamp'], //生成签名的时间戳
        nonceStr: data['nonceStr'], //生成签名的随机字符串
        signature: data['signature'], //签名
        jsApiList: [ //需要调用的JS接口列表
          'checkJsApi', //判断当前客户端版本是否支持指定JS接口
          'onMenuShareTimeline', //分享给好友
          'onMenuShareAppMessage' //分享到朋友圈
        ]
      });
    });
}

// 获取app用户mid信息
// 移动端获取用户mid
const mid = function getMid(){
  var mid ="";
  if(mid == null || mid == '' || mid == undefined){
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      var system = "";
      if(isAndroid) {
          system = "Android";
          if(window.android.getMid){
              mid = window.android.getMid();				
          }
      } else if(isiOS) {
          system = "iOS";
          if(window.ios.getMid){
          mid = window.ios.getMid();
          }
      } 
  }
  return mid;
}


Vue.prototype.$imgPreview = imgPreview
Vue.prototype.$dateFormat = dateFormat
Vue.prototype.$dateFormatNoTime = dateFormatNoTime
Vue.prototype.$todayFormat = todayFormat
// Vue.prototype.$outputXlsxFile = outputXlsxFile
Vue.prototype.$checkTime = checkTime
Vue.prototype.$typeSex = typeSex
Vue.prototype.$timestampToTime = timestampToTime
Vue.prototype.$getUrlData = getUrlData
Vue.prototype.$concactToUrl = concactToUrl
Vue.prototype.$isEmpty = isEmpty;
Vue.prototype.$tips = tips;
Vue.prototype.$wxShare = wxShare;
