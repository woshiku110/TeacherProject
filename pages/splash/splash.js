var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    picPath:'images/load.jpg'
  },
  onShow:function(){
    var that = this;  
    console.log("123name:"+app.test.name);
    var oneTime = setInterval(function(){
        console.log("time to run");
        that.jumpPage();
        clearInterval(oneTime);
    },3500);
  },
  onUnload:function(){
    console.log('卸载闪屏页');
  },
  jumpPage:function(){
    wx.redirectTo({
        //url: '../question/question'
        url: '../questionOne/questionOne'
    })
  }
})