gdjs.Logo_32introCode = {};
gdjs.Logo_32introCode.GDblackgroundObjects1= [];
gdjs.Logo_32introCode.GDblackgroundObjects2= [];
gdjs.Logo_32introCode.GDblackgroundObjects3= [];
gdjs.Logo_32introCode.GDNewObjectObjects1= [];
gdjs.Logo_32introCode.GDNewObjectObjects2= [];
gdjs.Logo_32introCode.GDNewObjectObjects3= [];
gdjs.Logo_32introCode.GDNewObject2Objects1= [];
gdjs.Logo_32introCode.GDNewObject2Objects2= [];
gdjs.Logo_32introCode.GDNewObject2Objects3= [];

gdjs.Logo_32introCode.conditionTrue_0 = {val:false};
gdjs.Logo_32introCode.condition0IsTrue_0 = {val:false};
gdjs.Logo_32introCode.condition1IsTrue_0 = {val:false};


gdjs.Logo_32introCode.eventsList0 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().get("time").add(1);
}}

}


{


gdjs.Logo_32introCode.condition0IsTrue_0.val = false;
{
gdjs.Logo_32introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("time")) == 150;
}if (gdjs.Logo_32introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "menu_Demo");
}}

}


};gdjs.Logo_32introCode.eventsList1 = function(runtimeScene) {

{


gdjs.Logo_32introCode.eventsList0(runtimeScene);
}


};

gdjs.Logo_32introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Logo_32introCode.GDblackgroundObjects1.length = 0;
gdjs.Logo_32introCode.GDblackgroundObjects2.length = 0;
gdjs.Logo_32introCode.GDblackgroundObjects3.length = 0;
gdjs.Logo_32introCode.GDNewObjectObjects1.length = 0;
gdjs.Logo_32introCode.GDNewObjectObjects2.length = 0;
gdjs.Logo_32introCode.GDNewObjectObjects3.length = 0;
gdjs.Logo_32introCode.GDNewObject2Objects1.length = 0;
gdjs.Logo_32introCode.GDNewObject2Objects2.length = 0;
gdjs.Logo_32introCode.GDNewObject2Objects3.length = 0;

gdjs.Logo_32introCode.eventsList1(runtimeScene);
return;

}

gdjs['Logo_32introCode'] = gdjs.Logo_32introCode;
