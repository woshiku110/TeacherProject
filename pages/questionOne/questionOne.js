var app = getApp();
var that;
var problemDatas;
var utils = require('js/utils.js');
var userAnswers = [];
Page({
    data:{
        name:"",
        qos:"",
        total:15,
        dataItem:'',
        options:'',
        isSingle:''
    },
    onLoad:function(){
        that = this;
        utils.loadBasicDatas(function(isOk,data){
            if(isOk){
                console.log("ok");
                console.log(data);
                that.loadBasicOk(app.qosAns);
            }else{
                console.log("fail");
                console.log(data);
                // that.loadBasicFail(app.qosAns);
                that.loadBasicOk(app.qosAns);//因为目前拿不到网络数据只能默认加载成功
            }
        })
    },
    //用户选择答案点击
    userClick:function(e){
        var value = e.currentTarget.dataset.value;
        var index = value - 1;
        if(app.qosIndex < 5){
            if(that.data.dataItem.is_checkbox == '0'){//单选
                that.data.dataItem.option[index].isChoosed = !that.data.dataItem.option[index].isChoosed;
                that.setData({
                    options:that.data.dataItem.option
                });
                userAnswers.push({"tid":problemDatas[index].id,"id":that.data.dataItem.option[index].id,"checkbox":"0"});//把单选题目放入
                that.nextQos(problemDatas,app.qosIndex++);//下一题
            }else{//多选
                that.data.dataItem.option[index].isChoosed = !that.data.dataItem.option[index].isChoosed;
                that.setData({
                    options:that.data.dataItem.option
                });
            }
            console.log(index);//拿到用户选择答案的索引
        }else if(app.qosIndex == 5){
            console.log("我是第五题目");
            console.log(userAnswers);
        }
        
    },
    //用于多选点击
    nextQosClick:function(){
        if(app.qosIndex < 5){
            var index = app.qosIndex - 1;//拿到当前页面的索引
            var ansIds = [];
            for(var i=0;i<that.data.options.length;i++){
                var op = that.data.options[i];
                if(op.isChoosed){
                    ansIds.push(op.id);
                }
            }
            userAnswers.push({"tid":problemDatas[index].id,"id":ansIds,"checkbox":"1"});//把单选题目放入
            console.log("多选");
            console.log(that.data.options);
            that.nextQos(problemDatas,app.qosIndex++);
        }else if(app.qosIndex == 5){
            console.log("我是第五题目");
            console.log(userAnswers);
        }
    },
    /**
     * 从问题集合中拿数据
     * data 从网络访问拿到的数据
     * index 拿第几个问题
     */
    nextQos:function(data,index){
        that.data.dataItem = data[index];
        if(that.data.dataItem.is_checkbox == '0'){
            that.setData({
                isSingle:false
            });
        }else{
            that.setData({
                isSingle:true
            });
        }
        for(var i=0;i<that.data.dataItem.option.length;i++){
            that.data.dataItem.option[i].isChoosed = false;
        }
        that.setData({
            name:"问题"+"("+(index+1)+"/"+that.data.total+")",
            qos:that.data.dataItem.name,
            options:that.data.dataItem.option
        });
    },
    //加载基础题目完成
    loadBasicOk:function(data){
        console.log(data);
        problemDatas = data;
        that.nextQos(data,app.qosIndex++);
    },
    //用于加载失败
    loadBasicFail:function(data){
        console.log(data);
    }
})