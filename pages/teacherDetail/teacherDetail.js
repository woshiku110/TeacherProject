var app = getApp();
Page({
  data: {
    name:'',
    signDesc:'',
    college:'',
    time:'',
    student:'',
    price:'',
    subjectTags:'',
    skillTags:'',
    albumImages:'',
    point:'',
    talkList:''
  },
  onShow:function(){
      var that = this; 
      that.setData(
        {
          name:app.teacherDetail.name,
          signDesc:app.teacherDetail.signDesc,
          college:app.teacherDetail.college,
          time:app.teacherDetail.time,
          student:app.teacherDetail.student,
          price:app.teacherDetail.price,
          subjectTags:app.teacherDetail.subjectTags,
          skillTags:app.teacherDetail.skillTags,
          albumImages:app.teacherDetail.albumImages,
          point:app.teacherDetail.point,
          talkList:app.teacherDetail.talkList
        }
      );
      console.log(that.data.albumImages);
  }
})