gdjs.End_95DemoCode = {};
gdjs.End_95DemoCode.GDbackgroundObjects1= [];
gdjs.End_95DemoCode.GDbackgroundObjects2= [];
gdjs.End_95DemoCode.GDplanetObjects1= [];
gdjs.End_95DemoCode.GDplanetObjects2= [];
gdjs.End_95DemoCode.GDTitleObjects1= [];
gdjs.End_95DemoCode.GDTitleObjects2= [];
gdjs.End_95DemoCode.GDdesObjects1= [];
gdjs.End_95DemoCode.GDdesObjects2= [];
gdjs.End_95DemoCode.GDtextObjects1= [];
gdjs.End_95DemoCode.GDtextObjects2= [];

gdjs.End_95DemoCode.conditionTrue_0 = {val:false};
gdjs.End_95DemoCode.condition0IsTrue_0 = {val:false};
gdjs.End_95DemoCode.condition1IsTrue_0 = {val:false};


gdjs.End_95DemoCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_95DemoCode.condition0IsTrue_0.val = false;
{
gdjs.End_95DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.End_95DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.End_95DemoCode.eventsList1 = function(runtimeScene) {

{


gdjs.End_95DemoCode.eventsList0(runtimeScene);
}


};

gdjs.End_95DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_95DemoCode.GDbackgroundObjects1.length = 0;
gdjs.End_95DemoCode.GDbackgroundObjects2.length = 0;
gdjs.End_95DemoCode.GDplanetObjects1.length = 0;
gdjs.End_95DemoCode.GDplanetObjects2.length = 0;
gdjs.End_95DemoCode.GDTitleObjects1.length = 0;
gdjs.End_95DemoCode.GDTitleObjects2.length = 0;
gdjs.End_95DemoCode.GDdesObjects1.length = 0;
gdjs.End_95DemoCode.GDdesObjects2.length = 0;
gdjs.End_95DemoCode.GDtextObjects1.length = 0;
gdjs.End_95DemoCode.GDtextObjects2.length = 0;

gdjs.End_95DemoCode.eventsList1(runtimeScene);
return;

}

gdjs['End_95DemoCode'] = gdjs.End_95DemoCode;
