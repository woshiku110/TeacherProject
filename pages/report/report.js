var app = getApp();
var that;
Page({
  data: {
    motto: 'Hello World',
  },
  onLoad:function(){
    that = this;
  },
  showLoading:function(){
      wx.showToast({
         title: '加载中',
         icon: 'loading'
      });
  },
  cancelLoading:function(){
        wx.hideToast();
     },
  userClick:function(){
    that.showLoading();
    var oneTime = setInterval(function(){
        that.jumpPage();
        clearInterval(oneTime);
        
    },1000);
  },
  jumpPage:function(){
    wx.navigateTo({
      url: '../teacherList/teacherList',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        that.cancelLoading();
      }
    })
  }
})