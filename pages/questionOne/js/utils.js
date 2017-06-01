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
function loadBaseData(param,openid,group,loadOk){
    showDialog();
    UrlLoad('http://119.23.22.247/index.php/apicloud/index/basics',
    {"sub":param,
     "openid":openid,
     "group":group   
    },
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
//加载最弱学课
function loadWeak(param,openid,group,loadOk){
    showDialog();
    UrlLoad('http://119.23.22.247/index.php/apicloud/index/weak',
    {"sub":param,
     "openid":openid,
     "group":group   
    },
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
function userLogin(){
    wx.login({
        success:function(e){
            console.log("登录成功");
            console.log(e);
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                  "js_code":e.code,
                  "appid":'wx154c1ef4940d0887',
                  "secret":"2a60e4f483f3db6a5acad957ca675fd6",
                  "grant_type":"authorization_code"
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                // success
                console.log("login ok");
                console.log(res);
              },
              fail: function(res) {
                // fail
                console.log("login fail");
                console.log(res);
              },
              complete: function(res) {
                // complete
              }
            })
        },
        fail:function(e){
            console.log("登录失败");
            console.log(e);
        }
    });
}
module.exports.showDialog = showDialog;
module.exports.closeDialog = closeDialog;
module.exports.loadBasicDatas = loadBasicDatas;
module.exports.loadBaseData = loadBaseData;
module.exports.loadWeak = loadWeak;
module.exports.userLogin = userLogin;