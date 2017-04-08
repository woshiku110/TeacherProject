function myTest(){
    console.log("test 一下");
}
/**
 * @param index 表示当前问题 app  
 * @param app 表示全局对象  
 * @param that 当前页面对象
 * @description 用于显示页面的问题和答案 
 * 显示问题 
 * */
function showIndexQos(index,app,that){
      var qosAnswers = app.qosAnswers;
      console.log("data:"+qosAnswers[index].qos);
      that.setData({name:'问题'+'('+(index+1)+'/'+qosAnswers.length+')'});//qosAnswers[index].qos
      that.setData({qos:qosAnswers[index].qos});
      that.setData({answers:qosAnswers[index].answers});
}

function setUserAnswerIndex(index,userChooseIndex,app){
    var qosAnswers = app.qosAnswers;
    qosAnswers[index].userChooseIndex = userChooseIndex;
}
module.exports.myTest = myTest;
module.exports.showIndexQos = showIndexQos;
module.exports.setUserAnswerIndex = setUserAnswerIndex;