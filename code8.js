gdjs.sc_95inshipCode = {};
gdjs.sc_95inshipCode.GDbackgroundObjects1= [];
gdjs.sc_95inshipCode.GDbackgroundObjects2= [];
gdjs.sc_95inshipCode.GDinshipObjects1= [];
gdjs.sc_95inshipCode.GDinshipObjects2= [];
gdjs.sc_95inshipCode.GDscObjects1= [];
gdjs.sc_95inshipCode.GDscObjects2= [];
gdjs.sc_95inshipCode.GDtextboxObjects1= [];
gdjs.sc_95inshipCode.GDtextboxObjects2= [];
gdjs.sc_95inshipCode.GDhappyObjects1= [];
gdjs.sc_95inshipCode.GDhappyObjects2= [];
gdjs.sc_95inshipCode.GDNewObjectObjects1= [];
gdjs.sc_95inshipCode.GDNewObjectObjects2= [];
gdjs.sc_95inshipCode.GDNewObject2Objects1= [];
gdjs.sc_95inshipCode.GDNewObject2Objects2= [];
gdjs.sc_95inshipCode.GDNewObject3Objects1= [];
gdjs.sc_95inshipCode.GDNewObject3Objects2= [];

gdjs.sc_95inshipCode.conditionTrue_0 = {val:false};
gdjs.sc_95inshipCode.condition0IsTrue_0 = {val:false};
gdjs.sc_95inshipCode.condition1IsTrue_0 = {val:false};


gdjs.sc_95inshipCode.eventsList0 = function(runtimeScene) {

{


gdjs.sc_95inshipCode.condition0IsTrue_0.val = false;
{
gdjs.sc_95inshipCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sc_95inshipCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "sc1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "sc2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "sc3");
}}

}


{


gdjs.sc_95inshipCode.condition0IsTrue_0.val = false;
{
gdjs.sc_95inshipCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.sc_95inshipCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sc_inship3", false);
}}

}


};

gdjs.sc_95inshipCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sc_95inshipCode.GDbackgroundObjects1.length = 0;
gdjs.sc_95inshipCode.GDbackgroundObjects2.length = 0;
gdjs.sc_95inshipCode.GDinshipObjects1.length = 0;
gdjs.sc_95inshipCode.GDinshipObjects2.length = 0;
gdjs.sc_95inshipCode.GDscObjects1.length = 0;
gdjs.sc_95inshipCode.GDscObjects2.length = 0;
gdjs.sc_95inshipCode.GDtextboxObjects1.length = 0;
gdjs.sc_95inshipCode.GDtextboxObjects2.length = 0;
gdjs.sc_95inshipCode.GDhappyObjects1.length = 0;
gdjs.sc_95inshipCode.GDhappyObjects2.length = 0;
gdjs.sc_95inshipCode.GDNewObjectObjects1.length = 0;
gdjs.sc_95inshipCode.GDNewObjectObjects2.length = 0;
gdjs.sc_95inshipCode.GDNewObject2Objects1.length = 0;
gdjs.sc_95inshipCode.GDNewObject2Objects2.length = 0;
gdjs.sc_95inshipCode.GDNewObject3Objects1.length = 0;
gdjs.sc_95inshipCode.GDNewObject3Objects2.length = 0;

gdjs.sc_95inshipCode.eventsList0(runtimeScene);
return;

}

gdjs['sc_95inshipCode'] = gdjs.sc_95inshipCode;
