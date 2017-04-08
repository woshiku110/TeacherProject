var utils = require('js/utils.js');
var app = getApp();
var that;
Page({
  data: {
    userInfo:'',
    name:"数据",
    qos:"",
    answers:"",
  },
  onLoad:function(){
    that = this;
    utils.myTest();
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    app.qosIndex = 0;//页面加载默认选择索引
    utils.showIndexQos(app.qosIndex,app,that);//页面加载的默认界面
  },
  onShow:function(){
    console.log("问题显示");
  },
  onHide:function(){
    console.log("问题隐藏");
  },
  onUpload:function(){
    console.log("问题卸载");
  },
  userClick:function(e){
    var index = e.currentTarget.dataset.value;
    console.log(index - 1);//拿到用户选择答案的索引
    utils.setUserAnswerIndex(app.qosIndex,(index-1),app);//设置用户索引
    app.qosIndex += 1;
    if(app.qosIndex<app.qosAnswers.length){
        //console.log(app.qosIndex);
        utils.showIndexQos(app.qosIndex,app,that);//页面加载的界面
    }else{
        app.qosIndex = app.qosAnswers.length - 1;
        console.log("完成问题");
        console.log(app.qosAnswers);
        wx.navigateTo({
          url: '../report/report',
          success: function(res){
            // success
            console.log('success');
          },
          fail: function() {
            // fail
            console.log('fail');
          },
          complete: function() {
            // complete
            console.log('complete');
            app.qosIndex = 0;//页面加载默认选择索引
            utils.showIndexQos(app.qosIndex,app,that);//页面加载的默认界面
          }
        })
    }
  }
})