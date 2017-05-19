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
function UrlLoad(address,params,loadOk){
    wx.request({
        url: address, //仅为示例，并非真实的接口地址
        data: params,
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          loadOk(true,res);
        },
        fail:function(res){
          loadOk(false,res);
        }
    })
}
//加载筛选网络数据
function loadBasicDatas(loadOk){
    showDialog();
    UrlLoad('http://119.23.22.247/index.php/apicloud/index/question',{},
        function(isOk,data){
            if(isOk){
                loadOk(true,data);
                closeDialog();
            }else{
                loadOk(false,data);
                closeDialog();
            }
        }
    )
}
//加载基础数据并把筛选数据上传
function loadBaseData(param,loadOk){
    showDialog();
    UrlLoad('http://119.23.22.247/index.php/apicloud/index/basics',{"sub":param},
        function(isOk,data){
            if(isOk){
                loadOk(true,data);
                closeDialog();
            }else{
                loadOk(false,data);
                closeDialog();
            }
        }
    )
}
module.exports.showDialog = showDialog;
module.exports.closeDialog = closeDialog;
module.exports.loadBasicDatas = loadBasicDatas;
module.exports.loadBaseData = loadBaseData;