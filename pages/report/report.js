var app = getApp();
var that;
Page({
  data: {
    motto: 'Hello World',
    totalPoint:'',
    totalContent:'',
    totalSubjects:'',
    firstProblem:'',
    badMark:'',
    badContent:'',
    secondProblem:'',
    goodMark:'',
    goodContent:'',
    teacherSubs:'',
    firstPersonAmount:'',
    secondPersonAmount:'',
    tutor_ability1:'',
    tutor_ability2:''
  },
  onLoad:function(){
    that = this;
    that.setData({
      totalPoint:app.reportResult.result.all_score,
      totalContent:app.reportResult.result.all_content,
      totalSubjects:app.reportResult.result.tutor_course.split(','),
      badMark:app.reportResult.result.first_ability,
      badContent:app.reportResult.result.first_content,
      firstProblem:app.reportResult.result.first_problem,
      secondProblem:app.reportResult.result.second_problem,
      goodMark:app.reportResult.result.second_ability,
      goodContent:app.reportResult.result.second_content,
      teacherSubs:app.reportResult.result.sub,
      firstPersonAmount:app.reportResult.result.first,
      secondPersonAmount:app.reportResult.result.second,
      tutor_ability1:app.reportResult.result.tutor_ability1,
      tutor_ability2:app.reportResult.result.tutor_ability2
    });
    console.log(that.data.totalSubject);
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