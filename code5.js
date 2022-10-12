gdjs.testCode = {};
gdjs.testCode.GDNewObjectObjects1= [];
gdjs.testCode.GDNewObjectObjects2= [];
gdjs.testCode.GDbackgroundObjects1= [];
gdjs.testCode.GDbackgroundObjects2= [];
gdjs.testCode.GDin_95rocket_95testObjects1= [];
gdjs.testCode.GDin_95rocket_95testObjects2= [];

gdjs.testCode.conditionTrue_0 = {val:false};
gdjs.testCode.condition0IsTrue_0 = {val:false};
gdjs.testCode.condition1IsTrue_0 = {val:false};


gdjs.testCode.mapOfGDgdjs_46testCode_46GDin_9595rocket_9595testObjects1Objects = Hashtable.newFrom({"in_rocket_test": gdjs.testCode.GDin_95rocket_95testObjects1});gdjs.testCode.eventsList0 = function(runtimeScene) {

{


gdjs.testCode.condition0IsTrue_0.val = false;
{
gdjs.testCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.testCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "sc_lunch");
}}

}


};gdjs.testCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("in_rocket_test"), gdjs.testCode.GDin_95rocket_95testObjects1);

gdjs.testCode.condition0IsTrue_0.val = false;
{
gdjs.testCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.testCode.mapOfGDgdjs_46testCode_46GDin_9595rocket_9595testObjects1Objects, runtimeScene, true, false);
}if (gdjs.testCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.testCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testCode.GDNewObjectObjects1.length = 0;
gdjs.testCode.GDNewObjectObjects2.length = 0;
gdjs.testCode.GDbackgroundObjects1.length = 0;
gdjs.testCode.GDbackgroundObjects2.length = 0;
gdjs.testCode.GDin_95rocket_95testObjects1.length = 0;
gdjs.testCode.GDin_95rocket_95testObjects2.length = 0;

gdjs.testCode.eventsList1(runtimeScene);
return;

}

gdjs['testCode'] = gdjs.testCode;
