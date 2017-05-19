function showDialog(){
    console.log("打开对话框");
    wx.showToast({
         title: '加载中',
         icon: 'loading'
      });
}
function closeDialog(){
    console.log("关闭对话框");
    wx.hideToast();
}
function loadBasicDatas(loadOk){
    showDialog();
    wx.request({
        url: 'http://119.23.22.247/index.php/apicloud/index/question', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          console.log('ok');
          console.log(res.data)
          loadOk(true,res);
          closeDialog();
        },
        fail:function(res){
        console.log('fail');
          console.log(res)   
          loadOk(false,res);
          closeDialog();
        }
    })
}
module.exports.showDialog = showDialog;
module.exports.closeDialog = closeDialog;
module.exports.loadBasicDatas = loadBasicDatas;