var app = getApp();
var that;
var selectedIndex;
Page({
    data:{
        userInfo: {},
        teacherListData:[],
        showModalStatus:false,
        loveModalStatus:false,
        loveText:"您好，要收藏吗？",
        myTeacherList:''
    },
    onLoad:function(){
        that = this;
        that.setData(
            {
                teacherListData:app.teacherListData,
                myTeacherList:app.myTeacherList
            }
        );
        console.log(that.data.teacherListData);
    },
     
    userClick:function(e){
        var index = e.currentTarget.dataset.value;
        console.log('index：'+index);
        wx.navigateTo({
          url: '../teacherDetail/teacherDetail',
          success: function(res){
            // success
            console.log('success');
          },
          fail: function() {
            // fail
            console.log('fail');
          },
          complete: function() {
          }
        })
    },
    loveClick:function(e){
        var index = e.currentTarget.dataset.value;
        selectedIndex = index;
        if(that.data.teacherListData[selectedIndex-1].isLove){
            that.setData(
            {
                loveText:"您好，要放弃收藏吗？"
            })
        }else{
            that.setData(
            {
                loveText:"您好，要收藏吗？"
            })
        }
        that.setData(
            {
                loveModalStatus:true
            }
        );
    },
    modalBindaconfirm:function(){
        that.setData({
            loveModalStatus:false
        })
        console.log(selectedIndex-1);
        that.data.teacherListData[selectedIndex-1].isLove = !that.data.teacherListData[selectedIndex-1].isLove;
        that.setData({
            teacherListData:that.data.teacherListData
        });
    },
    modalBindcancel:function(){
        that.setData({
            loveModalStatus:false
        })
    },
    moreClick:function(e){
        that.setData(
            {
                showModalStatus:true
            })
        console.log("more click");
    },
    hideModal: function () {
        // 隐藏遮罩层
        var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
        animationData: animation.export(),
        })
        setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
            animationData: animation.export(),
            showModalStatus: false
        })
        }.bind(this), 200)
    }
})