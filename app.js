//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  test:{
      name:"woshiku",
      firstLoad:true
  },
  categroy:{
    studyType:[
                {typed:'预习',point:-1},
                {typed:"预习",point:-2}
              ],
    abilityType:[
          {
            desc:'学习主动性差',
            reason:'学习主动性差的孩子，一般是由于其缺乏良好彻底学习习惯与学习方法缺乏学习兴趣;或者学习兴趣肤浅;范围狭窄;兴趣不能稳定持久。此类孩子多数缺乏学习动机或学习动机多停留在短暂，浮浅的消极水平上。',
            solution:['1.家教帮助孩子梳理学习思路，学会找出不懂的问题。','2.家教多鼓励孩子，引导孩子提出问题，解决问题。',
            '3.家教带领孩子找出学习的重点，有效的锻炼学习能力。','4.家教帮助孩子整理学习笔记，并且提醒孩子经常在课前,考试前回顾笔记。'],
            teacherLabel:'亲和力，耐心，责任心+专科评分最高'
          }
         ]
  }
  ,
  qosIndex:0,
  // 问题和答案
  qosAnswers:[
    {
      qos:"1.在学习新的课程前，您的孩子有了解新内容或记下不懂问题的习惯吗？",
      answers:["A.经常","  B.偶尔","  C.没有"],
      subResult:[{studyType:-1,abilityType:-1},{studyType:0,abilityType:0},{studyType:1,abilityType:0}],
      rightIndex:2,
      userChooseIndex:0
    },
    {
      qos:"woshiku测试一下，试试看看",
      answers:["  woshiku选择A","  woshiku选择B","  woshiku选择C","  woshiku选择D"],
      rightIndex:1,
      userChooseIndex:0
    },
    {
      qos:"woshi测试一下，试试看看",
      answers:["  woshiku选择","  woshiku选择","  woshiku选择","  woshiku选择"],
      rightIndex:1,
      userChooseIndex:0
    }
  ],
  teacherListData:[
    {
      icon:'images/ico_splash.png',
      name:'刘晓',
      desc:'努力就会成功吗？',
      money:'￥90',
      isLove:false,
      historyScore:'25',
      commentScore:'7.5',
      labelOne:['数学','语文','历史','政治','数学','语文','历史','政治','数学','语文','历史','政治','数学','语文','历史','政治','数学','语文','历史','政治'],
      labelTwo:['沟通能力','能力表达','沟通能力','能力表达','沟通能力','能力表达','沟通能力','能力表达','沟通能力','能力表达']
     },
    {
      icon:'images/ico_splash.png',
      name:'woshiku',
      desc:'永远相信明天会更好？',
      money:'￥92',
      isLove:true,
      historyScore:'20',
      commentScore:'7.2',
      labelOne:['数学','语文','历史','政治','英语'],
      labelTwo:['沟通能力','能力表达']
    },
    {
      icon:'images/ico_splash.png',
      name:'刘晓',
      desc:'努力就会成功吗？',
      money:'￥90',
      isLove:true,
      historyScore:'25',
      commentScore:'7.5',
      labelOne:['数学','语文','历史','政治','数学','语文'],
      labelTwo:['沟通能力','能力表达','沟通能力','能力表达']
    },
    {
      icon:'images/ico_splash.png',
      name:'刘晓1',
      desc:'努力就会成功吗？',
      money:'￥90',
      isLove:true,
      historyScore:'25',
      commentScore:'7.5',
      labelOne:['数学','语文','历史','政治','数学'],
      labelTwo:['沟通能力','能力表达']
    }
  ],
  teacherDetail:{
    name:'李晓杰',
    fans:'500',
    signDesc:'教学是我一生的乐趣所在',
    college:'天津理工大学',
    time:'2016年4月成为家庭教师',
    student:'4',
    price:'90',
    subjectTags:["物理","英语","化学","数学","语文","历史","政治"],
    skillTags:["沟通能力","专业知识能力","类推能力"],
    albumImages:["beauty_01.jpg","beauty_02.jpg","beauty_03.jpg","beauty_04.jpg"],
    point:"7.6",
    talkList:[{icon:"beauty_01.jpg",name:"小明",date:"2014-03-11",desc:"海外网4月7日电 据外媒报道，7日伊拉克库尔德斯坦安全委员会在推特上写道，“伊斯兰国”武装分子在摩苏尔处死140名平民。"},{icon:"beauty_02.jpg",name:"小张",date:"2017-03-11",desc:"公告中说：“周一和周二‘伊斯兰国’处死140名试图逃往伊拉克军队控制地区的平民。”公告中称，武装分子把一些死者的遗体挂到电线杆上。"}]
  }
})