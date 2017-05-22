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
  qosAns:[
      {
            "category_name": "基础筛选题目",
            "cid": "1",
            "id": "1",
            "is_checkbox": "0",
            "name": "您孩子的性别",
            "option": [
                {
                    "answer": "A.男",
                    "cid": "0",
                    "id": "1"
                },
                {
                    "answer": "B.女",
                    "cid": "0",
                    "id": "2"
                }
            ],
            "substatus": "1"
        },
        {
            "category_name": "基础筛选题目",
            "cid": "1",
            "id": "2",
            "is_checkbox": "0",
            "name": "您孩子的年级",
            "option": [
                {
                    "answer": "A.初一年级、初二年级",
                    "cid": "0",
                    "id": "3"
                },
                {
                    "answer": "B.初三年级",
                    "cid": "0",
                    "id": "4"
                },
                {
                    "answer": "C.高一年级、高二年级",
                    "cid": "0",
                    "id": "5"
                },
                {
                    "answer": "D.高三年级",
                    "cid": "0",
                    "id": "6"
                }
            ],
            "substatus": "1"
        },
        {
            "category_name": "基础筛选题目",
            "cid": "1",
            "id": "3",
            "is_checkbox": "1",
            "name": "您孩子的弱项学科(此题可多选)",
            "option": [
                {
                    "answer": "A.语文",
                    "cid": "3",
                    "id": "7"
                },
                {
                    "answer": "B.数学",
                    "cid": "4",
                    "id": "8"
                },
                {
                    "answer": "C.英语",
                    "cid": "5",
                    "id": "9"
                },
                {
                    "answer": "D.物理",
                    "cid": "6",
                    "id": "10"
                },
                {
                    "answer": "E.化学",
                    "cid": "7",
                    "id": "11"
                },
                {
                    "answer": "F.生物",
                    "cid": "11",
                    "id": "12"
                },
                {
                    "answer": "G.历史",
                    "cid": "8",
                    "id": "13"
                },
                {
                    "answer": "H.地理",
                    "cid": "9",
                    "id": "14"
                },
                {
                    "answer": "I.政治",
                    "cid": "10",
                    "id": "15"
                }
            ],
            "substatus": "1"
        },
        {
            "category_name": "基础筛选题目",
            "cid": "1",
            "id": "4",
            "is_checkbox": "0",
            "name": "孩子这半年考试的平均成绩为",
            "option": [
                {
                    "answer": "A.30-50",
                    "cid": "0",
                    "id": "16"
                },
                {
                    "answer": "B.50-70",
                    "cid": "0",
                    "id": "17"
                },
                {
                    "answer": "C.70-90",
                    "cid": "0",
                    "id": "18"
                },
                {
                    "answer": "D.90-110",
                    "cid": "0",
                    "id": "19"
                }
            ],
            "substatus": "1"
        },
        {
            "category_name": "基础筛选题目",
            "cid": "1",
            "id": "5",
            "is_checkbox": "0",
            "name": "您希望孩子高考成绩为",
            "option": [
                {
                    "answer": "A.90-100",
                    "cid": "0",
                    "id": "20"
                },
                {
                    "answer": "B.100-110",
                    "cid": "0",
                    "id": "21"
                },
                {
                    "answer": "C.110-120",
                    "cid": "0",
                    "id": "22"
                },
                {
                    "answer": "D.120-130",
                    "cid": "0",
                    "id": "23"
                }
            ],
            "substatus": "1"
        }
  ],
  baseData:[
    {
      "id": "11",
      "name": "您的孩子是否有“学习注意力不集中、做事磨蹭、有头无尾，缺乏时间观念和任务感”的现象吗？",
      "category_name": "基础题目",
      "cid": "2",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "39",
          "cid": "2",
          "answer": "A.经常"
        },
        {
          "id": "40",
          "cid": "2",
          "answer": "B.偶尔"
        },
        {
          "id": "41",
          "cid": "2",
          "answer": "C.没有"
        }
      ]
    },
    {
      "id": "7",
      "name": "孩子是否主动向您倾诉想法",
      "category_name": "基础题目",
      "cid": "2",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "27",
          "cid": "2",
          "answer": "A.经常"
        },
        {
          "id": "28",
          "cid": "2",
          "answer": "B.偶尔"
        },
        {
          "id": "29",
          "cid": "2",
          "answer": "C.没有"
        }
      ]
    },
    {
      "id": "10",
      "name": "您的孩子有不会预习、不会巩固复习、不重视平时的作业和练习的现象吗？",
      "category_name": "基础题目",
      "cid": "2",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "36",
          "cid": "2",
          "answer": "A.有"
        },
        {
          "id": "37",
          "cid": "2",
          "answer": "B.偶尔"
        },
        {
          "id": "38",
          "cid": "2",
          "answer": "C.没有"
        }
      ]
    }
  ],
  weakData:[
    {
      "id": "23",
      "name": "在语文阅读理解方面（尤其是课外阅读习题），您孩子最大的问题是？",
      "category_name": "语文题目",
      "cid": "3",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "79",
          "sid": "23",
          "cid": "3",
          "answer": "A.读不懂文章"
        },
        {
          "id": "80",
          "sid": "23",
          "cid": "3",
          "answer": "B.难以分析出文章的中心思想"
        },
        {
          "id": "81",
          "sid": "23",
          "cid": "3",
          "answer": "C.以上均没有"
        }
      ]
    },
    {
      "id": "33",
      "name": "您孩子在物理学习中最大的困难是什么？",
      "category_name": "理综题目",
      "cid": "6,11",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "114",
          "sid": "33",
          "cid": "6",
          "answer": "A.运动学"
        },
        {
          "id": "115",
          "sid": "33",
          "cid": "6",
          "answer": "B.力学"
        },
        {
          "id": "116",
          "sid": "33",
          "cid": "6",
          "answer": "C.电磁学"
        },
        {
          "id": "117",
          "sid": "33",
          "cid": "6",
          "answer": "D.实验"
        },
        {
          "id": "118",
          "sid": "33",
          "cid": "6",
          "answer": "E.不会做题"
        },
        {
          "id": "119",
          "sid": "33",
          "cid": "6",
          "answer": "F.没有"
        }
      ]
    },
    {
      "id": "29",
      "name": "在英语学习上，您孩子做阅读的方法？",
      "category_name": "英语题目",
      "cid": "5",
      "substatus": "1",
      "is_checkbox": "0",
      "option": [
        {
          "id": "99",
          "sid": "29",
          "cid": "5",
          "answer": "A.先读文章再看问题"
        },
        {
          "id": "100",
          "sid": "29",
          "cid": "5",
          "answer": "B.先看问题再看文章"
        },
        {
          "id": "101",
          "sid": "29",
          "cid": "5",
          "answer": "C.不清楚"
        }
      ]
    }
  ],
  // 问题和答案
  qosAnswers:[
    {
      qos:"1.在学习新的课程前，您的孩子有了解新内容或记下不懂问题的习惯吗？",
      answers:["A.经常","  B.偶尔","  C.没有"],
      subResult:[{studyType:-1,abilityType:-1},{studyType:0,abilityType:0},{studyType:1,abilityType:0}],
      rightIndex:2,
      userChooseIndex:0,
      isSingleItem:true
    },
    {
      qos:"woshiku测试一下，试试看看",
      answers:["  woshiku选择A","  woshiku选择B","  woshiku选择C","  woshiku选择D"],
      rightIndex:1,
      userChooseIndex:0,
      isSingleItem:false
    },
    {
      qos:"woshi测试一下，试试看看",
      answers:["  woshiku选择","  woshiku选择","  woshiku选择","  woshiku选择"],
      rightIndex:1,
      userChooseIndex:0,
      isSingleItem:true
    }
  ],
  reportResult:{
      "status": 1,
      "msg": "报告及解决方案",
      "result": {
          "id": "196",
          "openid": "0",
          "tutor_course": "语文,数学,英语",
          "cid": "7,8,9",
          "sid": "0",
          "all_score": "9.0",
          "all_content": "您的孩子在校期间的听课效率较高，可以做到情绪饱满、精力集中，抓住重点、弄清关键。孩子认为自己基础不行，自暴自弃；对学习感到恐惧、焦虑、厌恶；总觉得是在“帮”老师和家长读书。",
          "first_id": "15",
          "first_problem": "听课效率高",
          "first_ability": "10.2",
          "first_content": "有上课主动回答问题的习惯 ，善于认真思考每一个问题，积极回答。",
          "second_id": "8",
          "second_problem": "贪玩厌学",
          "second_ability": "9.4",
          "second_content": "孩子贪玩厌学的问题总在困扰家长。由于缺乏学习的主动性，孩子经常认为学习是为了完成任务，把学习完全当成一种负担。因此导致厌学情绪严重，越学越觉得枯燥乏味。",
          "tutor_ability1": "可以在课堂自主加深对知识的理解，具有比较好的心理素质。",
          "tutor_ability2": "开发孩子学习动力，调动学习的主动性，分析孩子的学习目标和方向，激发学习兴趣，让孩子发现学习的乐趣所在。最终，让孩子快乐学习，用自己喜欢的方式学习。",
          "createtime": "1495096333",
          "sub": [
              "语文",
              "数学",
              "英语"
          ],
          "first": "0",
          "second": "2"
      }
  },
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