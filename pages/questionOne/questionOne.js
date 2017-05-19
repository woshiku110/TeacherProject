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
        //基础筛选题目点击
        if(app.qosIndex <= 5){
            if(that.data.dataItem.is_checkbox == '0'){//单选
                that.data.dataItem.option[index].isChoosed = !that.data.dataItem.option[index].isChoosed;
                that.setData({
                    options:that.data.dataItem.option
                });
                userAnswers.push({"tid":problemDatas[index].id,"id":that.data.dataItem.option[index].id,"checkbox":"0"});//把单选题目放入
                if(app.qosIndex < 5){
                    that.nextQos(problemDatas,app.qosIndex++);//下一题
                }else{
                    console.log("单选第五题");
                    console.log(userAnswers);
                    var param = JSON.stringify(userAnswers);
                    console.log(param);
                    //加载基础题目
                    utils.loadBaseData(param,
                        function(isOk,data){
                            if(isOk){
                                that.loadBaseOk(app.baseData);
                            }else{
                                that.loadBaseOk(app.baseData);//因为目前拿不到网络数据只能默认加载成功
                            }
                        }
                    );
                }
            }else{//多选
                that.data.dataItem.option[index].isChoosed = !that.data.dataItem.option[index].isChoosed;
                that.setData({
                    options:that.data.dataItem.option
                });
            }
        }
        if(app.qosIndex <= 8){
            
        }
    },
    //用于多选点击
    nextQosClick:function(){
        //基础筛选题目点击
        if(app.qosIndex <= 5 ){
            var index = app.qosIndex - 1;//拿到当前页面的索引
            var ansIds = [];
            for(var i=0;i<that.data.options.length;i++){
                var op = that.data.options[i];
                if(op.isChoosed){
                    ansIds.push(op.id);
                }
            }
            userAnswers.push({"tid":problemDatas[index].id,"id":ansIds,"checkbox":"1"});//把单选题目放入
            if(app.qosIndex < 5){
                that.nextQos(problemDatas,app.qosIndex++);
            }else{
                console.log("多选第五题");
                var param = JSON.stringify(userAnswers);
                console.log(param);
                //加载基础题目
                utils.loadBaseData(param,
                    function(isOk,data){
                        if(isOk){
                            that.loadBaseOk(app.baseData);
                        }else{
                            that.loadBaseOk(app.baseData);//因为目前拿不到网络数据只能默认加载成功
                        }
                    }
                );
            }
        }
    },
    /**
     * 从问题集合中拿数据
     * data 从网络访问拿到的数据
     * index 拿第几个问题
     */
    nextQos:function(data,index){
        that.data.dataItem = data[index];
        console.log('nextQos');
        console.log(data[index]);
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
    //加载基础筛选题目完成
    loadBasicOk:function(data){
        console.log(data);
        problemDatas = data;
        that.nextQos(data,app.qosIndex++);
    },
    //加载基础筛选题目失败
    loadBasicFail:function(data){
        console.log(data);
    },
    //加载基础题目完成
    loadBaseOk:function(data){
        console.log("基础数据");
        console.log(data);
        data.forEach(function(e){
            problemDatas.push(e);//把获取的问题数据放入到数组中
        });
        that.nextQos(problemDatas,app.qosIndex++);//下一题
        userAnswers = [];
    },
    //加载基础题目失败
    loadBaseFail:function(data){

    }
})