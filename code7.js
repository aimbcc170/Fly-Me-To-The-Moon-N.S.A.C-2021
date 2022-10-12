gdjs.sc_95inship3Code = {};
gdjs.sc_95inship3Code.GDbackgroundObjects1= [];
gdjs.sc_95inship3Code.GDbackgroundObjects2= [];
gdjs.sc_95inship3Code.GDinshipObjects1= [];
gdjs.sc_95inship3Code.GDinshipObjects2= [];
gdjs.sc_95inship3Code.GDscObjects1= [];
gdjs.sc_95inship3Code.GDscObjects2= [];
gdjs.sc_95inship3Code.GDtextboxObjects1= [];
gdjs.sc_95inship3Code.GDtextboxObjects2= [];
gdjs.sc_95inship3Code.GDhappyObjects1= [];
gdjs.sc_95inship3Code.GDhappyObjects2= [];
gdjs.sc_95inship3Code.GDNewObjectObjects1= [];
gdjs.sc_95inship3Code.GDNewObjectObjects2= [];
gdjs.sc_95inship3Code.GDNewObject2Objects1= [];
gdjs.sc_95inship3Code.GDNewObject2Objects2= [];
gdjs.sc_95inship3Code.GDNewObject3Objects1= [];
gdjs.sc_95inship3Code.GDNewObject3Objects2= [];

gdjs.sc_95inship3Code.conditionTrue_0 = {val:false};
gdjs.sc_95inship3Code.condition0IsTrue_0 = {val:false};
gdjs.sc_95inship3Code.condition1IsTrue_0 = {val:false};


gdjs.sc_95inship3Code.eventsList0 = function(runtimeScene) {

{


gdjs.sc_95inship3Code.condition0IsTrue_0.val = false;
{
gdjs.sc_95inship3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.sc_95inship3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sc_inship4", false);
}}

}


};gdjs.sc_95inship3Code.eventsList1 = function(runtimeScene) {

{


gdjs.sc_95inship3Code.condition0IsTrue_0.val = false;
{
gdjs.sc_95inship3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sc_95inship3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "sc2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "sc1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "sc3");
}}

}


{


{
{runtimeScene.getVariables().get("wait").add(1);
}}

}


{


gdjs.sc_95inship3Code.condition0IsTrue_0.val = false;
{
gdjs.sc_95inship3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("wait")) >= 100;
}if (gdjs.sc_95inship3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sc_95inship3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.sc_95inship3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sc_95inship3Code.GDbackgroundObjects1.length = 0;
gdjs.sc_95inship3Code.GDbackgroundObjects2.length = 0;
gdjs.sc_95inship3Code.GDinshipObjects1.length = 0;
gdjs.sc_95inship3Code.GDinshipObjects2.length = 0;
gdjs.sc_95inship3Code.GDscObjects1.length = 0;
gdjs.sc_95inship3Code.GDscObjects2.length = 0;
gdjs.sc_95inship3Code.GDtextboxObjects1.length = 0;
gdjs.sc_95inship3Code.GDtextboxObjects2.length = 0;
gdjs.sc_95inship3Code.GDhappyObjects1.length = 0;
gdjs.sc_95inship3Code.GDhappyObjects2.length = 0;
gdjs.sc_95inship3Code.GDNewObjectObjects1.length = 0;
gdjs.sc_95inship3Code.GDNewObjectObjects2.length = 0;
gdjs.sc_95inship3Code.GDNewObject2Objects1.length = 0;
gdjs.sc_95inship3Code.GDNewObject2Objects2.length = 0;
gdjs.sc_95inship3Code.GDNewObject3Objects1.length = 0;
gdjs.sc_95inship3Code.GDNewObject3Objects2.length = 0;

gdjs.sc_95inship3Code.eventsList1(runtimeScene);
return;

}

gdjs['sc_95inship3Code'] = gdjs.sc_95inship3Code;
